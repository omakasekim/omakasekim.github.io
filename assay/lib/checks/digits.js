/**
 * First-digit test of the amounts printed in a filing, after Benford (1938), with the first-digit MAD
 * conformity bands from Nigrini, Benford's Law: Applications for Forensic Accounting, Auditing, and
 * Fraud Detection (Wiley, 2012).
 *
 * Method: take every comma-grouped amount in the document (statements and notes), keep each distinct
 * amount once, and compare the nine leading-digit shares with Benford's log10(1 + 1/d). Distinct
 * amounts are used because filings print the same figure many times: subtotals, comparatives, and
 * tables of identical issues. In CJ CheilJedang's FY2025 annual report one commercial paper amount
 * appears 1,214 times, which alone moves the raw MAD from 0.0018 to 0.0202. The most repeated amount
 * is reported separately, as in Nigrini's number duplication test. The status uses the mean
 * absolute deviation (MAD) of the shares, because MAD does not grow with the sample size the way a
 * chi-square test does. The chi-square statistic and its p-value (8 degrees of freedom) are reported
 * for reference only: with thousands of amounts it rejects for deviations too small to matter.
 *
 * Limits: a filing repeats many figures (subtotals, comparatives, the separate statements next to the
 * consolidated ones), a few large accounts can dominate a short document, and assigned or capped
 * numbers do not follow Benford at all. Conformity says nothing about whether figures are correct,
 * and nonconformity is not evidence of misstatement. The result is a prompt to look at which digits
 * are over-represented, never a conclusion about the company.
 */
/** Benford's expected share of each leading digit 1 to 9. */
export const BENFORD_FIRST = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => Math.log10(1 + 1 / d));
/**
 * Below this many amounts the MAD expected from sampling alone approaches the 0.012 band edge, so the
 * bands would mostly describe noise. At 1,000 amounts that noise level is about 0.0074.
 */
export const MIN_AMOUNTS = 1000;
/** Nigrini's first-digit MAD bands: upper bound of each band and its name. */
export const MAD_BANDS = [
    [0.006, 'close conformity'],
    [0.012, 'acceptable conformity'],
    [0.015, 'marginally acceptable conformity'],
    [Infinity, 'nonconformity'],
];
/** The leading digit of a positive amount, or undefined for zero, negatives and non-finite input. */
export function leadingDigit(value) {
    if (!Number.isFinite(value) || value < 1)
        return undefined;
    // Exponent notation starts with the leading digit too, so the string form is exact for any size.
    return Number(String(Math.trunc(value))[0]);
}
/** Survival function of the chi-square distribution with 8 degrees of freedom, in closed form. */
export function chiSquare8Survival(x) {
    if (!(x > 0))
        return 1;
    const h = x / 2;
    return Math.exp(-h) * (1 + h + (h * h) / 2 + (h * h * h) / 6);
}
/** Normal approximation of E|p - p_hat| averaged over the nine digits, for n draws from Benford. */
export function expectedMad(n) {
    if (n <= 0)
        return Infinity;
    const spread = BENFORD_FIRST.reduce((sum, p) => sum + Math.sqrt((p * (1 - p)) / n), 0) / 9;
    return spread * Math.sqrt(2 / Math.PI);
}
export function benfordTest(amounts) {
    const counts = new Array(9).fill(0);
    for (const value of amounts) {
        const digit = leadingDigit(value);
        if (digit !== undefined)
            counts[digit - 1]++;
    }
    const n = counts.reduce((sum, c) => sum + c, 0);
    if (n === 0)
        return undefined;
    const shares = counts.map((c) => c / n);
    const mad = shares.reduce((sum, share, i) => sum + Math.abs(share - BENFORD_FIRST[i]), 0) / 9;
    const chiSquare = counts.reduce((sum, c, i) => sum + (c - n * BENFORD_FIRST[i]) ** 2 / (n * BENFORD_FIRST[i]), 0);
    const conformity = MAD_BANDS.find(([limit]) => mad <= limit)[1];
    return { n, counts, shares, mad, expectedMad: expectedMad(n), chiSquare, pValue: chiSquare8Survival(chiSquare), conformity };
}
const round = (n, digits) => Number(n.toFixed(digits));
export function digitFinding(amounts, evidence) {
    const id = 'quality.digits';
    const title = 'Leading digits of printed amounts (Benford)';
    const sources = evidence ? [evidence] : [];
    const repeats = new Map();
    for (const value of amounts)
        if (leadingDigit(value) !== undefined)
            repeats.set(value, (repeats.get(value) ?? 0) + 1);
    const test = benfordTest([...repeats.keys()]);
    if (!test || test.n < MIN_AMOUNTS) {
        return { id, layer: 'earnings-quality', title, status: 'unavailable', detail: `Needs at least ${MIN_AMOUNTS} distinct printed amounts and found ${test?.n ?? 0}. Below that, chance alone moves the score across the bands.`, evidence: sources };
    }
    const printed = [...repeats.values()].reduce((sum, c) => sum + c, 0);
    const [mostRepeated, times] = [...repeats.entries()].reduce((best, entry) => (entry[1] > best[1] || (entry[1] === best[1] && entry[0] < best[0]) ? entry : best));
    // Report the digits furthest from expectation, so a reader knows where to look.
    const furthest = test.shares
        .map((share, i) => ({ digit: i + 1, gap: share - BENFORD_FIRST[i] }))
        .sort((a, b) => Math.abs(b.gap) - Math.abs(a.gap))
        .slice(0, 2)
        .map((d) => `${d.digit} at ${(test.shares[d.digit - 1] * 100).toFixed(1)}% against ${(BENFORD_FIRST[d.digit - 1] * 100).toFixed(1)}%`);
    const detail = `MAD ${test.mad.toFixed(4)} over ${test.n} distinct amounts (${printed} printed), ${test.conformity} on Nigrini's first-digit bands (0.006, 0.012, 0.015). `
        + `Sampling alone gives about ${test.expectedMad.toFixed(4)} at this size. Largest gaps: digit ${furthest.join(', digit ')}. `
        + `Most repeated amount: ${mostRepeated.toLocaleString('en-US')}, printed ${times} times. `
        + `Chi-square ${test.chiSquare.toFixed(1)} (8 df, p ${test.pValue < 0.0001 ? '< 0.0001' : test.pValue.toFixed(4)}) is shown for reference only, because with thousands of amounts it rejects deviations too small to matter. `
        + 'Repeated totals, a few dominant accounts and assigned numbers all move digit shares, so this is a screening statistic and not evidence of misstatement.';
    return {
        id, layer: 'earnings-quality', title,
        status: test.conformity === 'nonconformity' ? 'watch' : 'info',
        detail,
        value: round(test.mad, 4),
        evidence: sources,
    };
}
