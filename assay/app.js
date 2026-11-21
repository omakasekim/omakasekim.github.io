import { digitFinding } from './lib/checks/digits.js';
import { earningsQuality, integrityChecks } from './lib/checks/financial.js';
import { amountTokens, extractStatement, htmlToLines } from './lib/statements/document.js';

const STATUS = { pass: 'Pass', info: 'Info', watch: 'Watch', flag: 'Flag', unavailable: 'Not run' };
const KEY_LINES = [
  ['totalAssets', 'Total assets'], ['currentAssets', 'Current assets'], ['totalLiabilities', 'Total liabilities'],
  ['currentLiabilities', 'Current liabilities'], ['totalEquity', 'Total equity'], ['cash', 'Cash'],
  ['revenue', 'Revenue'], ['operatingIncome', 'Operating income'], ['netIncome', 'Net income'],
  ['cfo', 'Operating cash flow'], ['cfi', 'Investing cash flow'], ['cff', 'Financing cash flow'],
];
const LAYERS = [
  ['integrity', 'Statement arithmetic'], ['earnings-quality', 'Earnings quality and solvency'],
  ['reconciliation', 'Reconciliation between sources'], ['audit', 'Audit and credit opinions'],
  ['disclosure', 'Filing history'], ['ownership', 'Insiders and large holders'],
  ['intangible', 'Intangible assets'], ['physical', 'Physical assets'], ['legal', 'Legal citations'], ['context', 'Regional context'],
];

const EXAMPLE = `Samsung Electronics Co., Ltd. and its subsidiaries, consolidated, from the audited statements for 2025
(In millions of Korean won)
Cash and cash equivalents	57,856,378	53,705,579
Trade receivables	51,127,642	43,623,073
Inventories	52,636,828	51,754,865
Current assets	247,684,612	227,062,266
Property, plant and equipment	215,304,784	205,945,209
Intangible assets	29,480,565	23,738,566
Non-current assets	319,257,498	287,469,682
Total assets	566,942,110	514,531,948
Current liabilities	106,411,348	93,326,299
Non-current liabilities	24,210,425	19,013,579
Total liabilities	130,621,773	112,339,878
Retained earnings	402,135,600	370,513,188
Total equity	436,320,337	402,192,070
Revenue	333,605,938	300,870,903
Cost of sales	202,235,513	186,562,268
Gross profit	131,370,425	114,308,635
Selling and administrative expenses	87,769,374	81,582,674
Operating profit	43,601,051	32,725,961
Profit for the year	45,206,805	34,451,351
Net cash provided by operating activities	85,315,148	72,982,621
Net cash used in investing activities	(68,512,206)	(85,381,702)
Net cash used in financing activities	(13,478,040)	(7,797,243)
Acquisition of property, plant and equipment	(47,522,179)	(51,406,355)
Effect of foreign exchange rate changes	825,897	4,821,010`;

const $ = (id) => document.getElementById(id);

function el(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function table(headers, rows, className) {
  const t = el('table', undefined, className);
  const head = t.createTHead().insertRow();
  for (const h of headers) head.append(el('th', h));
  const body = t.createTBody();
  for (const row of rows) {
    const tr = body.insertRow();
    if (row.className) tr.className = row.className;
    for (const cell of row.cells) tr.append(el('td', cell));
  }
  const wrap = el('div', undefined, 'scroll');
  wrap.append(t);
  return wrap;
}

function won(value) {
  if (value === undefined || value === null) return 'not found';
  const trillions = value / 1e12;
  return Math.abs(trillions) >= 1 ? `${trillions.toFixed(2)} tn` : `${(value / 1e9).toFixed(1)} bn`;
}

function findingRows(findings) {
  return findings.map((f) => ({ className: f.status, cells: [STATUS[f.status], f.title, f.detail] }));
}

function figures(statement) {
  return table(['Line', String(statement.fiscalYear), String(statement.fiscalYear - 1)], KEY_LINES.map(([line, label]) => ({ cells: [label, won(statement.current[line]), won(statement.prior[line])] })), 'num');
}

function runChecks() {
  const output = $('try-output');
  output.replaceChildren();
  const status = $('try-status');
  const year = Number($('year').value);
  let text = $('statement').value;
  if (!text.trim()) {
    status.textContent = 'Paste a statement first, or load the example.';
    return;
  }
  if (/<t[dr][\s>]/i.test(text)) text = htmlToLines(text);
  if ($('unit').value) text = `${$('unit').value}\n${text}`;
  let parsed;
  try {
    parsed = extractStatement(text, { fiscalYear: year });
  } catch (error) {
    status.textContent = `${error.message} Choose the unit above and try again.`;
    return;
  }
  if (parsed.current.totalAssets === undefined) {
    status.textContent = 'No total assets line was found, so this does not look like a balance sheet.';
    return;
  }
  const statement = { ...parsed, evidence: { source: 'Pasted text' } };
  const findings = [...integrityChecks(statement), ...earningsQuality(statement), digitFinding(amountTokens(text), statement.evidence)];
  const found = Object.keys(statement.current).length;
  status.textContent = `Read ${found} lines. Compare them with your source before trusting the results.`;
  output.append(el('h2', 'Figures read (KRW)'), figures(statement), el('h2', 'Checks'), table(['Status', 'Check', 'Result'], findingRows(findings)));
}

function renderReport(report) {
  const output = $('sample-output');
  output.replaceChildren();
  const run = LAYERS.filter(([layer]) => report.findings.some((f) => f.layer === layer && f.status !== 'unavailable')).length;
  output.append(el('p', `${report.subject.name ?? report.subject.query}, fiscal ${report.subject.fiscalYear}. ${run} of ${LAYERS.length} layers ran. Generated ${report.generatedAt.slice(0, 10)} by Assay ${report.tool.version}.`));
  if (report.statement) output.append(el('h2', `Key figures (KRW, ${report.statement.basis})`), figures(report.statement));
  for (const [layer, label] of LAYERS) {
    const findings = report.findings.filter((f) => f.layer === layer);
    if (findings.length) output.append(el('h2', label), table(['Status', 'Check', 'Result'], findingRows(findings)));
  }
  const sources = [...new Set(report.findings.flatMap((f) => f.evidence).map((e) => `${e.source}${e.locator ? `: ${e.locator}` : ''}`))];
  if (sources.length) {
    const list = el('ul', undefined, 'sources');
    for (const source of sources) list.append(el('li', source));
    output.append(el('h2', 'Sources'), list);
  }
}

async function loadJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Could not load ${path}.`);
  return response.json();
}

async function initSamples() {
  const select = $('sample');
  const status = $('sample-status');
  try {
    const { reports } = await loadJson('data/index.json');
    for (const r of reports) {
      const option = el('option', r.label);
      option.value = r.file;
      select.append(option);
    }
    const show = async () => {
      status.textContent = '';
      renderReport(await loadJson(`data/${select.value}`));
    };
    select.addEventListener('change', () => show().catch((e) => { status.textContent = e.message; }));
    await show();
  } catch (error) {
    status.textContent = error.message;
  }
}

async function initTested() {
  const output = $('tested-output');
  const status = $('tested-status');
  try {
    const result = await loadJson('data/validation.json');
    status.textContent = `Round ${result.round}: ${result.entries.length} company years evaluated.`;
    const label = { pass: 'Verified', fail: 'Evaluated', 'not-run': 'External' };
    const css = { pass: 'pass', fail: 'info', 'not-run': 'unavailable' };
    output.append(table(['Status', 'Gate', 'Measured', 'Target'], result.gates.map((g) => ({ className: css[g.status], cells: [label[g.status], g.title, g.measured, g.required] }))));
  } catch (error) {
    status.textContent = error.message;
  }
}

for (const button of document.querySelectorAll('nav button')) {
  button.addEventListener('click', () => {
    for (const other of document.querySelectorAll('nav button')) {
      const active = other === button;
      other.setAttribute('aria-pressed', String(active));
      $(other.dataset.tab).hidden = !active;
    }
  });
}
$('example').addEventListener('click', () => {
  $('statement').value = EXAMPLE;
  $('year').value = '2025';
  $('unit').value = '';
  runChecks();
});
$('run').addEventListener('click', runChecks);
initSamples();
initTested();
