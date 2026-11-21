const FINANCIAL_SECTOR_NOTE = 'The model needs these lines. Banks, insurers and many service firms do not report them all.';
function finding(id, layer, title, status, detail, evidence, value) {
    return { id, layer, title, status, detail, value, evidence: [evidence] };
}
function missing(period, lines) {
    return lines.filter((line) => period[line] === undefined);
}
function round(n, digits = 3) {
    return Number(n.toFixed(digits));
}
function won(n) {
    return `KRW ${(n / 1e9).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} bn`;
}
/** Arithmetic that has to hold in any correctly reported statement. */
export function integrityChecks(s) {
    const tolerance = s.unit * 2;
    const { current: c, prior: p } = s;
    const out = [];
    const identity = (id, title, parts, description) => {
        if (parts.left === undefined || parts.right.some((v) => v === undefined)) {
            out.push(finding(id, 'integrity', title, 'unavailable', `Needs ${description}, and the source did not give every figure.`, s.evidence));
            return;
        }
        const gap = parts.left - parts.right.reduce((sum, v) => sum + v, 0);
        const ok = Math.abs(gap) <= tolerance;
        out.push(finding(id, 'integrity', title, ok ? 'pass' : 'flag', ok ? `${description} holds within rounding.` : `${description} is off by ${won(gap)}.`, s.evidence, gap));
    };
    identity('integrity.balance', 'Assets equal liabilities plus equity', { left: c.totalAssets, right: [c.totalLiabilities, c.totalEquity] }, 'assets = liabilities + equity');
    identity('integrity.balance-prior', 'Prior year balances too', { left: p.totalAssets, right: [p.totalLiabilities, p.totalEquity] }, 'prior-year assets = liabilities + equity');
    // Most filers include held-for-sale items in current items and a few list them apart, so a split
    // holds if it adds up either way.
    const split = (total, current, nonCurrent, held) => {
        if (total === undefined || current === undefined || nonCurrent === undefined || !held)
            return 0;
        return Math.abs(total - current - nonCurrent) > tolerance && Math.abs(total - current - nonCurrent - held) <= tolerance ? held : 0;
    };
    identity('integrity.assets-split', 'Current and non-current assets add up', { left: c.totalAssets, right: [c.currentAssets, c.nonCurrentAssets, split(c.totalAssets, c.currentAssets, c.nonCurrentAssets, c.assetsHeldForSale)] }, 'assets = current + non-current');
    identity('integrity.liabilities-split', 'Current and non-current liabilities add up', { left: c.totalLiabilities, right: [c.currentLiabilities, c.nonCurrentLiabilities, split(c.totalLiabilities, c.currentLiabilities, c.nonCurrentLiabilities, c.liabilitiesHeldForSale)] }, 'liabilities = current + non-current');
    if (c.costOfSales !== undefined) {
        identity('integrity.gross-profit', 'Gross profit follows from revenue and cost of sales', { left: c.grossProfit, right: [c.revenue, c.costOfSales === undefined ? undefined : -c.costOfSales] }, 'gross profit = revenue - cost of sales');
    }
    if (c.cash !== undefined && p.cash !== undefined && c.cfo !== undefined && c.cfi !== undefined && c.cff !== undefined) {
        const movement = c.cash - p.cash;
        const flows = c.cfo + c.cfi + c.cff;
        if (c.fxEffect !== undefined) {
            const gap = movement - flows - c.fxEffect - (c.cashOther ?? 0);
            const ok = Math.abs(gap) <= tolerance * 2;
            out.push(finding('integrity.cash-roll', 'integrity', 'Cash flows explain the change in cash', ok ? 'pass' : 'flag', ok ? 'Opening cash plus the three cash flows, FX and any filed reclassification equals closing cash.' : `Cash does not roll forward, off by ${won(gap)}.`, s.evidence, gap));
        }
        else {
            out.push(finding('integrity.cash-roll', 'integrity', 'Cash flows explain the change in cash', 'info', `The source gives no FX line. Cash moved ${won(movement)} against flows of ${won(flows)}, leaving ${won(movement - flows)} for FX and other items.`, s.evidence, movement - flows));
        }
    }
    else {
        out.push(finding('integrity.cash-roll', 'integrity', 'Cash flows explain the change in cash', 'unavailable', 'Needs cash in both years and all three cash flow totals.', s.evidence));
    }
    return out;
}
/** Beneish (1999), eight variables. TATA uses the cash flow form, (net income - CFO) / assets. */
export function beneish(s) {
    const { current: c, prior: p } = s;
    const title = 'Beneish M-score';
    const need = ['tradeReceivables', 'revenue', 'grossProfit', 'currentAssets', 'ppe', 'totalAssets', 'sga', 'totalLiabilities', 'netIncome', 'cfo'];
    const gaps = [...new Set([...missing(c, need), ...missing(p, need)])];
    if (gaps.length)
        return finding('quality.beneish', 'earnings-quality', title, 'unavailable', `Missing ${gaps.join(', ')}. ${FINANCIAL_SECTOR_NOTE}`, s.evidence);
    const dsri = (c.tradeReceivables / c.revenue) / (p.tradeReceivables / p.revenue);
    const gmi = (p.grossProfit / p.revenue) / (c.grossProfit / c.revenue);
    const quality = (x) => 1 - (x.currentAssets + x.ppe) / x.totalAssets;
    const aqi = quality(c) / quality(p);
    const sgi = c.revenue / p.revenue;
    const hasDepreciation = c.depreciation !== undefined && p.depreciation !== undefined;
    const rate = (x) => x.depreciation / (x.depreciation + x.ppe);
    const depiRaw = hasDepreciation ? rate(p) / rate(c) : 1;
    const useDepi = hasDepreciation && Number.isFinite(depiRaw);
    const depi = useDepi ? depiRaw : 1;
    const sgai = (c.sga / c.revenue) / (p.sga / p.revenue);
    const lvgi = (c.totalLiabilities / c.totalAssets) / (p.totalLiabilities / p.totalAssets);
    const tata = (c.netIncome - c.cfo) / c.totalAssets;
    const m = -4.84 + 0.92 * dsri + 0.528 * gmi + 0.404 * aqi + 0.892 * sgi + 0.115 * depi - 0.172 * sgai + 4.679 * tata - 0.327 * lvgi;
    if (![dsri, gmi, aqi, sgi, depi, sgai, lvgi, tata, m].every(Number.isFinite)) {
        return finding('quality.beneish', 'earnings-quality', title, 'unavailable', 'One or more required denominators is zero, so the M-score ratios are undefined.', s.evidence);
    }
    const status = m > -1.78 ? 'flag' : m > -2.22 ? 'watch' : 'pass';
    const parts = `DSRI ${round(dsri)}, GMI ${round(gmi)}, AQI ${round(aqi)}, SGI ${round(sgi)}, DEPI ${useDepi ? round(depi) : 'neutral (no depreciation figure)'}, SGAI ${round(sgai)}, TATA ${round(tata)}, LVGI ${round(lvgi)}`;
    return finding('quality.beneish', 'earnings-quality', title, status, `M = ${round(m)}. Above -1.78 flags, -2.22 to -1.78 is a watch. ${parts}. Fast growth alone can raise this score, and it was calibrated on US firms.`, s.evidence, round(m));
}
/** Altman, Hartzell and Peck (1995) Z'' for non-manufacturing and emerging-market firms. */
export function altman(s) {
    const c = s.current;
    const need = ['currentAssets', 'currentLiabilities', 'totalAssets', 'retainedEarnings', 'operatingIncome', 'totalEquity', 'totalLiabilities'];
    const gaps = missing(c, need);
    const title = "Altman Z'' distress score";
    if (gaps.length)
        return finding('quality.altman', 'earnings-quality', title, 'unavailable', `Missing ${gaps.join(', ')}. ${FINANCIAL_SECTOR_NOTE}`, s.evidence);
    const ta = c.totalAssets;
    const tl = c.totalLiabilities;
    if (ta === 0 || tl === 0) {
        return finding('quality.altman', 'earnings-quality', title, 'unavailable', 'Total assets or total liabilities is zero, so the Z\'\' ratios are undefined.', s.evidence);
    }
    const z = 6.56 * ((c.currentAssets - c.currentLiabilities) / ta) + 3.26 * (c.retainedEarnings / ta) + 6.72 * (c.operatingIncome / ta) + 1.05 * (c.totalEquity / tl);
    if (!Number.isFinite(z)) {
        return finding('quality.altman', 'earnings-quality', title, 'unavailable', 'One or more Z\'\' ratios are undefined.', s.evidence);
    }
    const status = z < 1.1 ? 'flag' : z < 2.6 ? 'watch' : 'pass';
    const zone = z < 1.1 ? 'distress' : z < 2.6 ? 'grey' : 'safe';
    return finding('quality.altman', 'earnings-quality', title, status, `Z'' = ${round(z, 2)}, ${zone} zone. Below 1.1 is distress, above 2.6 is safe.`, s.evidence, round(z, 2));
}
/** Piotroski (2000). Without share counts the equity-issuance test is dropped, not assumed passed. */
export function piotroski(s) {
    const { current: c, prior: p } = s;
    const title = 'Piotroski F-score';
    const need = ['netIncome', 'totalAssets', 'cfo', 'nonCurrentLiabilities', 'currentAssets', 'currentLiabilities', 'grossProfit', 'revenue'];
    const gaps = [...new Set([...missing(c, need), ...missing(p, need).filter((l) => l !== 'cfo')])];
    if (gaps.length)
        return finding('quality.piotroski', 'earnings-quality', title, 'unavailable', `Missing ${gaps.join(', ')}. ${FINANCIAL_SECTOR_NOTE}`, s.evidence);
    if (!c.totalAssets || !p.totalAssets || !c.currentLiabilities || !p.currentLiabilities || !c.revenue || !p.revenue) {
        return finding('quality.piotroski', 'earnings-quality', title, 'unavailable', 'A required denominator (total assets, current liabilities, or revenue) is zero, so the F-score ratios are undefined.', s.evidence);
    }
    const tests = [
        ['positive net income', c.netIncome > 0],
        ['positive operating cash flow', c.cfo > 0],
        ['return on assets improved', c.netIncome / c.totalAssets > p.netIncome / p.totalAssets],
        ['cash flow exceeds net income', c.cfo > c.netIncome],
        ['long-term leverage fell', c.nonCurrentLiabilities / c.totalAssets < p.nonCurrentLiabilities / p.totalAssets],
        ['current ratio improved', c.currentAssets / c.currentLiabilities > p.currentAssets / p.currentLiabilities],
        ['gross margin improved', c.grossProfit / c.revenue > p.grossProfit / p.revenue],
        ['asset turnover improved', c.revenue / c.totalAssets > p.revenue / p.totalAssets],
    ];
    if (s.shares?.current !== undefined && s.shares.prior !== undefined)
        tests.push(['no new shares issued', s.shares.current <= s.shares.prior]);
    const score = tests.filter(([, ok]) => ok).length;
    const ratio = score / tests.length;
    const status = ratio <= 2 / 9 ? 'flag' : ratio <= 4 / 9 ? 'watch' : 'pass';
    const failed = tests.filter(([, ok]) => !ok).map(([name]) => name);
    return finding('quality.piotroski', 'earnings-quality', title, status, `${score} of ${tests.length} tests passed.${failed.length ? ` Failed: ${failed.join(', ')}.` : ''}`, s.evidence, `${score}/${tests.length}`);
}
export function earningsQuality(s) {
    const { current: c, prior: p } = s;
    const out = [beneish(s), altman(s), piotroski(s)];
    const add = (id, title, status, detail, value) => {
        out.push(finding(id, 'earnings-quality', title, status, detail, s.evidence, value));
    };
    if (c.netIncome !== undefined && c.cfo !== undefined && c.cfi !== undefined && c.totalAssets !== undefined && p.totalAssets !== undefined) {
        const avgAssets = (c.totalAssets + p.totalAssets) / 2;
        if (avgAssets > 0) {
            const ratio = (c.netIncome - c.cfo - c.cfi) / avgAssets;
            const size = Math.abs(ratio);
            add('quality.accruals', 'Sloan accruals ratio', size > 0.25 ? 'flag' : size > 0.1 ? 'watch' : 'pass', `${(ratio * 100).toFixed(1)}% of average assets. Rule of thumb: within 10% is normal, beyond 25% needs explaining. Heavy investment pushes this up, so read it alongside capex.`, round(ratio));
        }
        else {
            add('quality.accruals', 'Sloan accruals ratio', 'unavailable', 'Average total assets is zero or negative, so the accruals ratio is undefined.');
        }
    }
    if (c.netIncome !== undefined && c.cfo !== undefined) {
        if (c.netIncome > 0) {
            const conversion = c.cfo / c.netIncome;
            add('quality.cash-conversion', 'Profit turning into cash', c.cfo < 0 ? 'flag' : conversion < 0.5 ? 'watch' : 'pass', `Operating cash flow is ${conversion.toFixed(2)} times net income.`, round(conversion, 2));
        }
        else {
            add('quality.cash-conversion', 'Profit turning into cash', c.cfo < 0 ? 'flag' : 'watch', c.cfo < 0 ? 'Both net income and operating cash flow are negative.' : 'Net loss, with positive operating cash flow.');
        }
    }
    const growthGap = (id, title, line) => {
        if (c[line] === undefined || p[line] === undefined || !p[line] || !p.revenue || c.revenue === undefined)
            return;
        const gap = c[line] / p[line] - c.revenue / p.revenue;
        add(id, title, gap > 0.5 ? 'flag' : gap > 0.2 ? 'watch' : 'pass', `Grew ${(gap * 100).toFixed(1)} points faster than revenue.`, round(gap));
    };
    growthGap('quality.receivables', 'Receivables against revenue growth', 'tradeReceivables');
    growthGap('quality.inventory', 'Inventory against revenue growth', 'inventories');
    if (c.totalEquity !== undefined && c.totalLiabilities !== undefined) {
        if (c.totalEquity <= 0)
            add('solvency.equity', 'Liabilities against equity', 'flag', 'Equity is zero or negative.');
        else {
            const ratio = c.totalLiabilities / c.totalEquity;
            add('solvency.equity', 'Liabilities against equity', ratio > 4 ? 'flag' : ratio > 2 ? 'watch' : 'pass', `Liabilities are ${(ratio * 100).toFixed(0)}% of equity. Normal levels differ a lot between sectors.`, round(ratio, 2));
        }
    }
    if (c.currentAssets !== undefined && c.currentLiabilities !== undefined) {
        if (c.currentLiabilities > 0) {
            const ratio = c.currentAssets / c.currentLiabilities;
            add('solvency.current', 'Current ratio', ratio < 1 ? 'watch' : 'pass', `Current assets are ${ratio.toFixed(2)} times current liabilities.`, round(ratio, 2));
        }
        else {
            add('solvency.current', 'Current ratio', 'unavailable', 'Current liabilities is zero or negative, so the current ratio is undefined.');
        }
    }
    if (c.intangibles !== undefined && c.totalEquity && c.totalEquity > 0) {
        const ratio = c.intangibles / c.totalEquity;
        add('solvency.intangibles', 'Intangibles against equity', ratio > 1 ? 'flag' : ratio > 0.5 ? 'watch' : 'pass', `Intangible assets are ${(ratio * 100).toFixed(1)}% of equity.`, round(ratio, 3));
    }
    if (c.ppe !== undefined && p.ppe !== undefined && c.capex !== undefined && c.depreciation !== undefined) {
        if (c.ppe > 0) {
            const gap = c.ppe - (p.ppe + c.capex - c.depreciation);
            const share = gap / c.ppe;
            add('quality.ppe-roll', 'Investment explains the change in PP&E', Math.abs(share) > 0.1 ? 'watch' : 'pass', `Opening PP&E plus capex minus depreciation misses closing PP&E by ${(share * 100).toFixed(1)}%. Acquisitions, FX and disposals can explain a gap.`, round(share));
        }
        else {
            add('quality.ppe-roll', 'Investment explains the change in PP&E', 'unavailable', 'Closing PP&E is zero or negative, so the roll-forward gap share is undefined.');
        }
    }
    return out;
}
