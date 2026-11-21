const COMMA_AMOUNT = /(?<![\d,.])[(△▲-]?\(?-?\d{1,3}(?:,\d{3})+\)?(?![\d,])/g;
/**
 * Applies a replacement whose every match ends with `>`. No match can end after the last `>`, so the
 * text after it is left alone. That keeps the result identical while stopping the regex engine from
 * rescanning to the end of the input from every unmatched `<`, which made hostile input quadratic.
 */
function replaceTags(text, pattern, replacement) {
    const last = text.lastIndexOf('>');
    if (last < 0)
        return text;
    return text.slice(0, last + 1).replace(pattern, replacement) + text.slice(last + 1);
}
/** Removes markup tags. Same result as `text.replace(/<[^>]+>/g, '')`, in linear time. */
export function stripTags(text) {
    return replaceTags(text, /<[^>]+>/g, '');
}
function clean(text) {
    return stripTags(replaceTags(text, /<br\s*\/?>/gi, ' '))
        .replace(/&nbsp;/gi, ' ')
        .replace(/&amp;/gi, '&')
        .replace(/[\s　]+/g, ' ')
        .trim();
}
function toNumber(token) {
    const negative = /[(△▲-]/.test(token);
    const digits = Number(token.replace(/[^\d]/g, ''));
    return negative ? -digits : digits;
}
function splitCells(line) {
    if (/<t[dh][\s>]/i.test(line)) {
        // Every cell ends with a closing tag, so nothing after the last one can be a cell. Cutting there
        // keeps unclosed cells from making each opening tag rescan the rest of the line.
        let end = 0;
        for (const m of line.matchAll(/<\/t[dh]>/gi))
            end = m.index + m[0].length;
        return [...line.slice(0, end).matchAll(/<t[dh](?:\s[^>]*)?>([\s\S]*?)<\/t[dh]>/gi)].map((m) => clean(m[1]));
    }
    if (line.trim().startsWith('|')) {
        if (/^\s*\|[\s:|-]+\|\s*$/.test(line))
            return [];
        return line.trim().replace(/^\||\|$/g, '').split('|').map(clean);
    }
    return null;
}
function rowFromCells(cells, lineNo, noteColumn) {
    const values = [];
    let label = '';
    cells.forEach((cell, index) => {
        if (!cell || index === noteColumn)
            return;
        const tokens = cell.match(COMMA_AMOUNT);
        if (tokens) {
            if (!label && index === 0)
                label = cell.slice(0, cell.search(COMMA_AMOUNT)).trim();
            values.push(...tokens.map(toNumber));
        }
        else if (/^[-–—]$/.test(cell)) {
            values.push(0);
        }
        else if (/^[(△▲-]?\(?\d+\)?$/.test(cell)) {
            // A bare one or two digit number straight after the label is usually a note reference.
            const looksLikeNote = /^\d{1,2}$/.test(cell) && values.length === 0 && index === 1;
            if (!looksLikeNote)
                values.push(toNumber(cell));
        }
        else if (!label && !/^\d+(,\d+)*$/.test(cell)) {
            label = cell;
        }
    });
    return { label, values, cells, lineNo };
}
/** Drops script and style blocks. An opening tag with no closing tag after it is kept, as before. */
function removeBlocks(html) {
    const open = /<(script|style)\b/gi;
    const unclosed = new Set();
    let out = '';
    let kept = 0;
    for (let m = open.exec(html); m; m = open.exec(html)) {
        const name = m[1].toLowerCase();
        if (unclosed.has(name))
            continue;
        const close = new RegExp(`</${name}>`, 'gi');
        close.lastIndex = m.index + m[0].length;
        const end = close.exec(html);
        if (!end) {
            // No closing tag follows this one, so none follows any later one either.
            unclosed.add(name);
            continue;
        }
        out += html.slice(kept, m.index);
        kept = end.index + end[0].length;
        open.lastIndex = kept;
    }
    return out + html.slice(kept);
}
/** Wraps each table row in markers, with its paragraphs and breaks turned into spaces. */
function markRows(html) {
    const open = /<tr\b/gi;
    const close = /<\/tr>/gi;
    let out = '';
    let kept = 0;
    for (let m = open.exec(html); m; m = open.exec(html)) {
        const tagEnd = html.indexOf('>', m.index + 3);
        if (tagEnd < 0)
            break;
        close.lastIndex = tagEnd + 1;
        const end = close.exec(html);
        // Later rows start after this one, so they cannot find a closing tag either.
        if (!end)
            break;
        const row = html.slice(tagEnd + 1, end.index);
        out += `${html.slice(kept, m.index)}\u0001${replaceTags(row, /<\/?p\b[^>]*>|<br\s*\/?>/gi, ' ')}\u0001`;
        kept = end.index + end[0].length;
        open.lastIndex = kept;
    }
    return out + html.slice(kept);
}
/**
 * Puts each table row on its own line so filed HTML reads the same way as parsed documents. Runs in
 * linear time, so a document with unclosed rows, cells or scripts cannot stall the parser.
 */
export function htmlToLines(html) {
    // Cells can hold paragraphs, which must not split a row across lines.
    const rows = markRows(removeBlocks(html).replace(/\r?\n/g, ' '));
    return replaceTags(rows, /<\/table>|<\/p>|<\/h\d>|<\/div>|<table\b[^>]*>|<br\s*\/?>/gi, '\n').replace(/\u0001/g, '\n');
}
/**
 * Every comma-grouped amount printed in the text, as positive sizes in the document's own units.
 * Bare numbers are left out because they are mostly note references, years, page numbers and counts.
 */
export function amountTokens(markdown) {
    const out = [];
    // Read cell by cell, because adjacent cells with their tags removed would run into one number.
    for (const row of toRows(markdown)) {
        for (const cell of row.cells) {
            for (const token of cell.match(COMMA_AMOUNT) ?? []) {
                const value = Math.abs(toNumber(token));
                if (Number.isFinite(value) && value > 0)
                    out.push(value);
            }
        }
    }
    return out;
}
/** Flattens HTML tables, pipe tables and loose text into one label-plus-amounts row per line. */
export function toRows(markdown) {
    const rows = [];
    let noteColumn = -1;
    markdown.split('\n').forEach((line, lineNo) => {
        const cells = splitCells(line);
        if (cells && cells.length === 0)
            return;
        if (cells) {
            const header = cells.findIndex((c) => /^(notes?|주\s*석)$/i.test(c));
            if (header >= 0) {
                noteColumn = header;
                return;
            }
            rows.push(rowFromCells(cells, lineNo, noteColumn));
            return;
        }
        noteColumn = -1;
        const text = clean(line);
        if (!text)
            return;
        const tokens = text.match(COMMA_AMOUNT);
        rows.push({
            label: tokens ? text.slice(0, text.search(COMMA_AMOUNT)).trim() : text,
            values: tokens ? tokens.map(toNumber) : [],
            cells: [text],
            lineNo,
        });
    });
    return rows;
}
/** Longer cells are prose, not line labels, and are not worth running the label patterns over. */
const MAX_LABEL = 300;
function normalizeLabel(label) {
    if (label.length > MAX_LABEL)
        return '';
    const stripped = label
        .replace(/^[\s\dⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩIVX]+[.)]\s*/, '')
        .replace(/^[ㆍ·\s]+/, '')
        .replace(/\(\s*주\s*석?\s*[\d,\s]*\)/g, '')
        .replace(/\s*[\d,]+$/, '')
        .trim();
    return /[가-힣]/.test(stripped) ? stripped.replace(/\s+/g, '') : stripped;
}
const LABELS = {
    totalAssets: [/^total assets$/i, /^자산(총계|합계)$/],
    totalLiabilities: [/^total liabilities$/i, /^부채(총계|합계)$/],
    totalEquity: [/^total (shareholders'? )?equity$/i, /^자본(총계|합계)$/],
    cash: [/^cash and cash equivalents$/i, /^현금및현금성자산$/],
    tradeReceivables: [/^trade receivables$/i, /^trade and other( current)? receivables$/i, /^(유동)?(단기)?매출채권(?!.*(증감|증가|감소|변동|회수|손상|처분))/],
    inventories: [/^inventories$/i, /^(유동)?재고자산$/],
    ppe: [/^property, plant and equipment$/i, /^유형자산$/],
    intangibles: [/^intangible assets$/i, /^(영업권이외의)?무형자산(및영업권)?$/],
    retainedEarnings: [/^retained earnings/i, /^(이익잉여금|결손금|미처리결손금)/],
    revenue: [/^(revenue|sales)$/i, /^매출액$/, /^영업수익$/, /^수익\(매출액\)$/, /^매출$/],
    costOfSales: [/^cost of (sales|revenue)$/i, /^매출원가$/],
    grossProfit: [/^gross profit/i, /^매출총이익/],
    sga: [/^selling(,)? (general )?and administrative expenses$/i, /^판매(비)?(와|및)?(일반)?관리비$/],
    operatingIncome: [/^operating (profit|income|loss)/i, /^영업이익/, /^영업손실/],
    netIncome: [/^(profit|net (profit|income)|loss) for the (year|period)/i, /^(연결)?(당기|분기|반기)순(이익|손실)/],
    cfo: [/^net cash .*operating activities$/i, /^영업활동(으로인한|으로부터의)?(순)?(현금흐름|현금유입|현금유출)/],
    cfi: [/^net cash .*investing activities$/i, /^투자활동(으로인한|으로부터의)?(순)?(현금흐름|현금유입|현금유출)/],
    cff: [/^net cash .*financing activities$/i, /^재무활동(으로인한|으로부터의)?(순)?(현금흐름|현금유입|현금유출)/],
    capex: [/^(acquisition|purchase)s? of property, plant and equipment$/i, /^유형자산의(취득|증가)$/],
    fxEffect: [/^effects? of (foreign )?exchange rate changes/i, /^(?!.*(반영전|순증|순감)).*환율변동(효과|으로인한|에따른)/, /^(?!.*(반영전|순증|순감)).*(외화.*현금.*(환산|변동)|현금.*외화환산)/],
};
/** Below the financing total, cash moved to or from assets held for sale completes the roll-forward. */
/** A balance sheet line outside both current and non-current, so subtotals exclude it. */
export const HELD_FOR_SALE = /^(매각예정|처분(자산)?집단)|held.for.sale/i;
export const CASH_RECLASSIFIED = /처분\s*집단|매각\s*예정|연결\s*범위|held.for.sale/i;
/** Reads a statement's value from a known cell, where a blank means nothing happened in that year. */
function cellValue(cell) {
    const token = cell?.match(COMMA_AMOUNT)?.[0] ?? cell?.match(/^[(△▲-]?\(?\d+\)?$/)?.[0];
    return token ? toNumber(token) : 0;
}
export function matchLine(label, line) {
    const normalized = normalizeLabel(label);
    return (LABELS[line] ?? []).some((re) => re.test(normalized));
}
function unitFromText(text) {
    if (/in millions of (korean )?won|krw in millions|단위\s*[:：]?\s*백만\s*원|\(백만원\)/i.test(text))
        return 1_000_000;
    if (/in thousands of (korean )?won|단위\s*[:：]?\s*천\s*원/i.test(text))
        return 1_000;
    if (/in (korean )?won\b|단위\s*[:：]?\s*원/i.test(text))
        return 1;
    return undefined;
}
export function detectUnit(markdown) {
    const head = markdown.slice(0, Math.max(markdown.search(/total assets|자\s*산\s*총\s*계/i), 2000) + 2000);
    const unit = unitFromText(head);
    if (unit === undefined)
        throw new Error('Could not find a reporting unit in the document. Refusing to guess its scale.');
    return unit;
}
function detectYear(rows, markdown) {
    const head = markdown.slice(0, 4000);
    const english = head.match(/(20\d\d)\s+and\s+20\d\d/);
    if (english)
        return Number(english[1]);
    const korean = head.match(/(20\d\d)\s*년\s*\d{1,2}\s*월\s*\d{1,2}\s*일/);
    if (korean)
        return Number(korean[1]);
    const period = rows.find((r) => /20\d\d\.\d\d\.\d\d\s*현재/.test(r.label));
    return period ? Number(period.label.match(/(20\d\d)\.\d\d\.\d\d/)[1]) : undefined;
}
export const MAX_PAIR_ROWS = 2000;
/**
 * Finds the two rows that add up to `total` in both fiscal-year columns. Subtotals often come out
 * of PDFs with a missing or wrong label, so this relies on the arithmetic instead of the wording.
 */
export function findSubtotalPair(rows, total) {
    // The search is quadratic, so only the rows nearest the total are tried. A balance sheet section
    // has well under a hundred rows, so the cap only matters for hostile or misread documents.
    const candidates = rows.filter((r) => r.values.length >= 2).slice(-MAX_PAIR_ROWS);
    for (let i = 0; i < candidates.length; i++) {
        for (let j = i + 1; j < candidates.length; j++) {
            const a = candidates[i].values;
            const b = candidates[j].values;
            if (a[0] === 0 && a[1] === 0)
                continue;
            if (b[0] === 0 && b[1] === 0)
                continue;
            if (Math.abs(a[0] + b[0] - total[0]) <= 2 && Math.abs(a[1] + b[1] - total[1]) <= 2) {
                return [candidates[i], candidates[j]];
            }
        }
    }
    return undefined;
}
/** Locates the primary statements so that business tables and notes cannot be mistaken for them. */
export function statementSection(rows) {
    const heading = (pattern) => {
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const compact = row.label.replace(/\s+/g, ' ').replace(/(?<=[가-힣]) (?=[가-힣])/g, '');
            // A heading ends with the statement's name. Sentences that merely mention it do not count.
            if (row.label.length > 60 || /요약/.test(row.label) || !pattern.test(compact) || !/(상태표|position)(\s*\d+)?(\s*\(.*\))?$/i.test(compact))
                continue;
            if (rows.slice(i + 1, i + 300).some((r) => matchLine(r.label, 'totalAssets') && r.values.length >= 2))
                return i;
        }
        return -1;
    };
    let start = heading(/연결\s*재무\s*상태표|consolidated statements? of financial position/i);
    let basis = 'consolidated';
    if (start < 0) {
        start = heading(/재무\s*상태표|statements? of financial position/i);
        basis = start < 0 ? 'unknown' : 'separate';
    }
    if (start < 0)
        return { rows, basis: 'unknown' };
    const after = rows.slice(start);
    const financing = after.findIndex((r) => matchLine(r.label, 'cff'));
    const notes = after.findIndex((r, i) => i > financing && financing >= 0 && r.values.length === 0 && /^[\d.\s]*(연결\s*)?(재무제표\s*)?주석|^notes to the/i.test(r.label));
    return { rows: notes > 0 ? after.slice(0, notes) : after, basis };
}
/**
 * Reads depreciation from the cash flow statement, or else from the notes, where tables list each
 * asset class with the total last. Notes hold many such rows, including small held-for-sale tables,
 * so a figure must be a plausible share of PP&E. No answer is better than a wrong one, because the
 * Beneish score then treats depreciation as neutral.
 */
export function findDepreciation(statementRows, allRows, ppe, priorPpe, unit) {
    if (ppe === undefined || priorPpe === undefined)
        return undefined;
    const plausible = (value, base) => value >= base * 0.02 && value <= base * 0.6;
    const isDepreciation = (r) => /^(depreciation|감가상각(비)?)$/i.test(normalizeLabel(r.label));
    const direct = statementRows.find((r) => isDepreciation(r) && r.values.length >= 2);
    if (direct) {
        const a = Math.abs(direct.values[0]) * unit;
        const b = Math.abs(direct.values[1]) * unit;
        if (plausible(a, ppe) && plausible(b, priorPpe))
            return [a, b];
    }
    const totals = allRows.filter((r) => isDepreciation(r) && r.values.length >= 4).map((r) => Math.abs(r.values.at(-1)) * unit);
    const current = totals.findIndex((v) => plausible(v, ppe));
    if (current < 0)
        return undefined;
    const prior = totals.slice(current + 1).find((v) => plausible(v, priorPpe));
    return prior === undefined ? undefined : [totals[current], prior];
}
export function extractStatement(markdown, options = {}) {
    const allRows = toRows(markdown);
    const { rows, basis } = statementSection(allRows);
    const fiscalYear = options.fiscalYear ?? detectYear(rows, markdown);
    if (!fiscalYear)
        throw new Error('Could not determine the fiscal year. Pass it explicitly.');
    const found = new Map();
    const pending = [];
    const heldForSale = (section) => {
        const row = section.find((r) => r.values.length >= 2 && HELD_FOR_SALE.test(normalizeLabel(r.label)));
        return row ? [row.values[0], row.values[1]] : [0, 0];
    };
    for (const line of Object.keys(LABELS)) {
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (!matchLine(row.label, line))
                continue;
            let values = row.values;
            if (values.length === 0) {
                // Some layouts put a total's figures on the unlabelled row after its label.
                const next = rows.slice(i + 1, i + 4).find((r) => r.values.length >= 2 || r.label);
                if (next && !next.label)
                    values = next.values;
            }
            if (values.length < 2)
                continue;
            pending.push([line, values[0], values[1]]);
            found.set(line, row);
            break;
        }
    }
    const assets = found.get('totalAssets');
    const liabilities = found.get('totalLiabilities');
    let unit;
    if (assets) {
        const upward = rows.filter((r) => r.lineNo <= assets.lineNo).reverse();
        const unitRow = upward.find((r) => unitFromText(r.cells.join(' ')) !== undefined);
        unit = unitRow ? unitFromText(unitRow.cells.join(' ')) : detectUnit(markdown);
        const section = upward.slice(1).reverse();
        const held = heldForSale(section);
        if (held[0] || held[1])
            pending.push(['assetsHeldForSale', held[0], held[1]]);
        const pair = findSubtotalPair(section, assets.values) ?? findSubtotalPair(section, [assets.values[0] - held[0], assets.values[1] - held[1]]);
        if (pair) {
            pending.push(['currentAssets', pair[0].values[0], pair[0].values[1]]);
            pending.push(['nonCurrentAssets', pair[1].values[0], pair[1].values[1]]);
        }
    }
    else {
        unit = detectUnit(markdown);
    }
    if (assets && liabilities) {
        const section = rows.filter((r) => r.lineNo > assets.lineNo && r.lineNo < liabilities.lineNo);
        const held = heldForSale(section);
        if (held[0] || held[1])
            pending.push(['liabilitiesHeldForSale', held[0], held[1]]);
        const pair = findSubtotalPair(section, liabilities.values) ?? findSubtotalPair(section, [liabilities.values[0] - held[0], liabilities.values[1] - held[1]]);
        if (pair) {
            pending.push(['currentLiabilities', pair[0].values[0], pair[0].values[1]]);
            pending.push(['nonCurrentLiabilities', pair[1].values[0], pair[1].values[1]]);
        }
    }
    const current = {};
    const prior = {};
    for (const [line, a, b] of pending) {
        // A figure too large to hold exactly is a misread, and is left out rather than rounded.
        if (!Number.isSafeInteger(a * unit) || !Number.isSafeInteger(b * unit))
            continue;
        current[line] = a * unit;
        prior[line] = b * unit;
    }
    // A line labelled only as a loss can be printed as a positive figure, and it is still a loss.
    for (const line of ['operatingIncome', 'netIncome']) {
        const label = found.get(line)?.label ?? '';
        if (/손실|^(operating |net )?loss/i.test(label) && !/이익|profit|income/i.test(label)) {
            if (current[line] !== undefined)
                current[line] = -Math.abs(current[line]);
            if (prior[line] !== undefined)
                prior[line] = -Math.abs(prior[line]);
        }
    }
    // Filers print costs and investment with either sign, so they are stored as sizes.
    for (const line of ['capex', 'costOfSales', 'sga']) {
        if (current[line] !== undefined)
            current[line] = Math.abs(current[line]);
        if (prior[line] !== undefined)
            prior[line] = Math.abs(prior[line]);
    }
    // Korean statements print the financing total above its details, so search back from closing cash.
    const financing = found.get('cff');
    if (financing) {
        const after = rows.filter((r) => r.lineNo > financing.lineNo);
        const end = after.findIndex((r) => r.values.length >= 2 && /기말|end of the (year|period)/i.test(r.label) && !CASH_RECLASSIFIED.test(r.label));
        if (end >= 0) {
            // Reclassification rows often leave a year blank, so read them by the closing row's columns.
            const columns = after[end].cells.flatMap((cell, index) => (cell.match(COMMA_AMOUNT) ? [index] : []));
            const moved = after.slice(Math.max(0, end - 6), end).filter((r) => r.values.length >= 1 && CASH_RECLASSIFIED.test(r.label));
            const a = moved.reduce((sum, r) => sum + cellValue(r.cells[columns[0]]), 0) * unit;
            const b = moved.reduce((sum, r) => sum + cellValue(r.cells[columns[1]]), 0) * unit;
            if (moved.length && columns.length >= 2 && Number.isSafeInteger(a) && Number.isSafeInteger(b)) {
                current.cashOther = a;
                prior.cashOther = b;
            }
        }
    }
    const depreciation = findDepreciation(rows, allRows, current.ppe, prior.ppe, unit);
    if (depreciation) {
        current.depreciation = depreciation[0];
        prior.depreciation = depreciation[1];
    }
    return { fiscalYear, basis, unit, current, prior };
}
const NOT_A_MATTER = /^(핵심감사사항|해당\s*핵심감사사항|감사인의\s*대응|우리의\s*감사|이\s*사항에)/;
const WHY_A_MATTER = /^(?:\d+\)+|\(\d+\)|\d+\.|[가-하]\.|[①-⑩])?\s*핵심감사사항(으로|\s*선정|\s*결정)/;
const NUMBERING = /^(?:\d+\)+|\(\d+\)|\d+\.|[가-하]\.|[①-⑩])\s*/;
/** Reads the auditor's own letter. Boilerplate about modified opinions does not trigger these patterns. */
export function extractAudit(markdown) {
    const letter = markdown.split('\n').map(clean).filter(Boolean).join('\n').slice(0, 24000);
    let opinion = 'not-found';
    if (/disclaimer of opinion|do not express an opinion|의견\s*거절\s*(근거)?\s*$|의견거절근거|의견을\s*표명하지\s*(않|아니)/im.test(letter))
        opinion = 'disclaimer';
    else if (/adverse opinion|부적정\s*의견/i.test(letter))
        opinion = 'adverse';
    else if (/(?<!un)qualified opinion|한정\s*의견/i.test(letter))
        opinion = 'qualified';
    else if (/in our opinion[\s\S]{0,300}present fairly|공정하게\s*표시/i.test(letter))
        opinion = 'unqualified';
    const goingConcernUncertainty = /material uncertainty[^.\n]{0,40}going concern|계속기업[^.\n]{0,30}중요한\s*불확실성/i.test(letter);
    const section = [];
    const start = letter.search(/^#*\s*(key audit matters?|핵심\s*감사\s*사항)\s*$/im);
    if (start >= 0) {
        for (const line of letter.slice(start).split('\n').slice(1)) {
            const plain = line.replace(/^#+\s*/, '');
            if (/^(other (matter|information)|responsibilit|기타\s*(사항|정보)|(연결\s*)?재무제표에\s*대한\s*경영진)/i.test(plain))
                break;
            section.push(plain);
        }
    }
    // Korean letters put each matter's title right above the heading that explains why it was chosen.
    const titled = section.flatMap((line, i) => (i > 0 && WHY_A_MATTER.test(line) ? [section[i - 1].replace(NUMBERING, '').trim()] : []));
    const numbered = section.filter((line) => NUMBERING.test(line) && line.length <= 170).map((line) => line.replace(NUMBERING, '').trim());
    const keyAuditMatters = (titled.length ? titled : numbered).filter((t) => t.length >= 4 && !NOT_A_MATTER.test(t));
    return { opinion, goingConcernUncertainty, keyAuditMatters };
}
const DOMESTIC_AGENCY = /한국기업평가|한국신용평가|NICE|나이스|한기평|한신평/;
/** Korean filings can write a middle grade with a zero, such as AA0. */
const GRADE = /(?<![A-Za-z])(AAA|AA[+\-0]?|A[+\-0]?|BBB[+\-0]?|BB[+\-0]?|B[+\-0]?|CCC[+\-]?|CC|C|D)(?![A-Za-z1-9])/;
/** Reads the credit rating table that annual reports carry when the company has rated debt. */
export function extractRatings(markdown) {
    const rows = toRows(markdown);
    const ratings = [];
    const starts = rows.flatMap((r, i) => (r.label.length < 60 && /신용\s*평가에\s*관한\s*사항|신용\s*평가(\s*(내역|현황|등급))?\s*$/.test(r.label) ? [i] : []));
    for (const start of starts) {
        for (const row of rows.slice(start + 1, start + 60)) {
            if (row.cells.length < 2)
                continue;
            const text = row.cells.join(' ');
            // Short-term paper and subordinated issues carry their own grades, not the company's.
            if (/기업어음|전자단기|단기사채|\bCP\b|후순위|신종자본|조건부자본|유동화/.test(text))
                continue;
            const agency = text.match(DOMESTIC_AGENCY)?.[0];
            if (!agency)
                continue;
            const cellGrade = row.cells.map((c) => c.match(GRADE)?.[1]).find(Boolean);
            if (!cellGrade)
                continue;
            const date = text.match(/20\d\d[.-]\s?\d{1,2}(?:[.-]\s?\d{1,2})?/)?.[0]?.replace(/\s/g, '');
            ratings.push({ agency, grade: cellGrade.replace('0', ''), date });
        }
        if (ratings.length)
            break;
    }
    return ratings;
}
const AGENCY_NAMES = { 한기평: '한국기업평가', 한신평: '한국신용평가', 나이스: 'NICE' };
/** Keeps the most recent grade from each domestic agency. Filings also list years of history. */
export function latestRatings(ratings) {
    const digits = (date) => (date ?? '').replace(/\D/g, '').padEnd(8, '0');
    const latest = new Map();
    for (const rating of ratings) {
        const agency = AGENCY_NAMES[rating.agency] ?? rating.agency;
        const held = latest.get(agency);
        if (!held || digits(rating.date) > digits(held.date))
            latest.set(agency, { ...rating, agency });
    }
    return [...latest.values()];
}
/**
 * Looks for the line's prior and current figures together on one row of a rounded document such as
 * an earnings deck, whose tables are too irregular to read column by column.
 */
export function findPairInText(text, current, prior, scale, decimals) {
    const format = (n) => Math.abs(n / scale).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const pattern = (t) => new RegExp(`(?<![\\d.,])${t.replace('.', '\\.')}(?![\\d%])`);
    const a = pattern(format(current));
    const b = pattern(format(prior));
    return text.split('\n').some((line) => a.test(line) && b.test(line));
}
