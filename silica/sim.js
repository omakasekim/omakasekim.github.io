// Silica browser engine: Life-like cellular automata (B/S rules, RLE) and falling sand.
// Source of truth for Rule, Rle, and Patterns: Silica core Life.kt.

export const EMPTY = 0;
export const SAND = 1;
export const WATER = 2;
export const OIL = 3;
export const ACID = 4;
export const STONE = 5;
export const WOOD = 6;
export const FIRE = 7;
export const SMOKE = 8;
export const STEAM = 9;

const ALL_COUNTS = 0x1ff;
const BS_REGEX = /^[Bb]([0-8]*)\/[Ss]([0-8]*)$/;
const LEGACY_REGEX = /^([0-8]*)\/([0-8]*)$/;
const DIM_REGEX = /^\+?\d+$/;

function digitsMask(digits) {
  let acc = 0;
  for (let i = 0; i < digits.length; i++) {
    acc |= 1 << (digits.charCodeAt(i) - 48);
  }
  return acc;
}

function formatDigits(mask) {
  let out = "";
  for (let i = 0; i <= 8; i++) {
    if ((mask >>> i) & 1) out += String(i);
  }
  return out;
}

/**
 * A life-like rule such as B3/S23.
 * Bit n of birth/survive means a dead/live cell with n live neighbors (0..8) is born/survives.
 */
export class Rule {
  constructor(birth, survive) {
    if (
      !Number.isInteger(birth) ||
      !Number.isInteger(survive) ||
      birth < 0 ||
      birth > ALL_COUNTS ||
      survive < 0 ||
      survive > ALL_COUNTS
    ) {
      throw new Error("rule masks must only use bits 0 to 8");
    }
    this.birth = birth;
    this.survive = survive;
  }

  get notation() {
    return "B" + formatDigits(this.birth) + "/S" + formatDigits(this.survive);
  }

  born(neighbors) {
    return ((this.birth >>> neighbors) & 1) !== 0;
  }

  survives(neighbors) {
    return ((this.survive >>> neighbors) & 1) !== 0;
  }

  equals(other) {
    return other instanceof Rule && this.birth === other.birth && this.survive === other.survive;
  }

  /**
   * Parses B3/S23 notation in either case, or the older S/B form 23/3.
   * Rejects neighbor counts above 8 or reversed S/B letters.
   */
  static parse(text) {
    if (typeof text !== "string") {
      throw new Error(`not a life-like rule: ${text}`);
    }
    const trimmed = text.trim();
    const bs = BS_REGEX.exec(trimmed);
    if (bs) {
      return new Rule(digitsMask(bs[1]), digitsMask(bs[2]));
    }
    const legacy = LEGACY_REGEX.exec(trimmed);
    if (legacy) {
      return new Rule(digitsMask(legacy[2]), digitsMask(legacy[1]));
    }
    throw new Error(`not a life-like rule: ${text}`);
  }
}

Rule.CONWAY = new Rule(1 << 3, (1 << 2) | (1 << 3));

function parseDimension(value, key) {
  if (!DIM_REGEX.test(value)) {
    throw new Error(`RLE header ${key} must be a size from 0 to ${Rle.MAX_COORDINATE}: ${value}`);
  }
  const n = Number(value);
  if (!Number.isSafeInteger(n) || n < 0 || n > Rle.MAX_COORDINATE) {
    throw new Error(`RLE header ${key} must be a size from 0 to ${Rle.MAX_COORDINATE}: ${value}`);
  }
  return n;
}

function decodeRle(text, maxCells, interpretHeader) {
  if (typeof text !== "string") {
    throw new Error("RLE input must be a string");
  }
  if (!Number.isInteger(maxCells) || maxCells < 0) {
    throw new Error("maxCells must not be negative");
  }

  let declaredWidth = null;
  let declaredHeight = null;
  let rule = null;
  let name = null;
  const comments = [];
  const bodyParts = [];
  let headerSeen = false;

  const lines = text.split(/\r\n|\n|\r/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("#")) {
      const kind = line[1];
      const rest = line.slice(2).trim();
      if (kind === "N") {
        name = rest;
      } else if (kind === "C" || kind === "c") {
        comments.push(rest);
      }
    } else if (line.startsWith("x")) {
      if (headerSeen || !interpretHeader) continue;
      headerSeen = true;
      const fields = [];
      for (const piece of line.split(",")) {
        if (piece.includes("=") || fields.length === 0) {
          fields.push(piece);
        } else {
          fields[fields.length - 1] += "," + piece;
        }
      }
      for (const field of fields) {
        const eq = field.indexOf("=");
        if (eq === -1) {
          throw new Error(`malformed RLE header field: ${field.trim()}`);
        }
        const key = field.slice(0, eq).trim();
        const value = field.slice(eq + 1).trim();
        if (key === "x") {
          declaredWidth = parseDimension(value, "x");
        } else if (key === "y") {
          declaredHeight = parseDimension(value, "y");
        } else if (key === "rule") {
          const colon = value.indexOf(":");
          const rulePart = colon === -1 ? value : value.slice(0, colon);
          rule = Rule.parse(rulePart);
        }
      }
    } else {
      bodyParts.push(line);
    }
  }

  const body = bodyParts.join("");
  const cells = [];
  let x = 0;
  let y = 0;
  let run = 0;
  let maxX = -1;

  for (let i = 0; i < body.length; i++) {
    const c = body[i];
    if (c >= "0" && c <= "9") {
      run = run * 10 + (c.charCodeAt(0) - 48);
      if (run > Rle.MAX_RUN_LENGTH) {
        throw new Error("run length is too large");
      }
    } else if (c === "b" || c === ".") {
      x += run > 1 ? run : 1;
      if (x > Rle.MAX_COORDINATE) {
        throw new Error(`pattern is wider than ${Rle.MAX_COORDINATE} cells`);
      }
      run = 0;
    } else if (c === "o" || c === "A") {
      const count = run > 1 ? run : 1;
      if (x + count > Rle.MAX_COORDINATE) {
        throw new Error(`pattern is wider than ${Rle.MAX_COORDINATE} cells`);
      }
      if (cells.length + count > maxCells) {
        throw new Error(`pattern has more than ${maxCells} live cells`);
      }
      for (let k = 0; k < count; k++) {
        cells.push([x++, y]);
      }
      if (x - 1 > maxX) maxX = x - 1;
      run = 0;
    } else if (c === "$") {
      y += run > 1 ? run : 1;
      if (y > Rle.MAX_COORDINATE) {
        throw new Error(`pattern is taller than ${Rle.MAX_COORDINATE} cells`);
      }
      x = 0;
      run = 0;
    } else if (c === " " || c === "\t") {
      // ignore whitespace between tokens
    } else if (c === "!") {
      break;
    } else {
      throw new Error(`unexpected RLE character '${c}'`);
    }
  }

  const measuredHeight = cells.length === 0 ? 0 : cells[cells.length - 1][1] + 1;
  return {
    cells,
    width: declaredWidth !== null ? declaredWidth : maxX + 1,
    height: declaredHeight !== null ? declaredHeight : measuredHeight,
    rule,
    name,
    comments,
  };
}

/** Reads and writes standard RLE patterns with size limits matching Silica's Kotlin Rle. */
export const Rle = {
  MAX_COORDINATE: 1 << 30,
  MAX_RUN_LENGTH: 1_000_000,
  DEFAULT_MAX_CELLS: 10_000_000,
  LINE_LENGTH: 70,

  parse(text, maxCells = Rle.DEFAULT_MAX_CELLS) {
    return decodeRle(text, maxCells, false).cells;
  },

  read(text, maxCells = Rle.DEFAULT_MAX_CELLS) {
    return decodeRle(text, maxCells, true);
  },

  write(cells, rule = Rule.CONWAY, comments = []) {
    const r = rule instanceof Rule ? rule : Rule.parse(rule);
    let out = "";
    for (const comment of comments) {
      for (const line of String(comment).split(/\r\n|\n|\r/)) {
        out += `#C ${line}\n`;
      }
    }
    if (!cells || cells.length === 0) {
      out += `x = 0, y = 0, rule = ${r.notation}\n!\n`;
      return out;
    }

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (let i = 0; i < cells.length; i++) {
      const x = cells[i][0];
      const y = cells[i][1];
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
    if (maxX - minX > Rle.MAX_COORDINATE || maxY - minY > Rle.MAX_COORDINATE) {
      throw new Error(`pattern is larger than ${Rle.MAX_COORDINATE} cells across`);
    }

    out += `x = ${maxX - minX + 1}, y = ${maxY - minY + 1}, rule = ${r.notation}\n`;

    const normalized = new Array(cells.length);
    for (let i = 0; i < cells.length; i++) {
      normalized[i] = [cells[i][0] - minX, cells[i][1] - minY];
    }
    normalized.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]));

    // Deduplicate sorted coordinates in place
    const sorted = [];
    for (let i = 0; i < normalized.length; i++) {
      const p = normalized[i];
      if (i === 0 || p[0] !== normalized[i - 1][0] || p[1] !== normalized[i - 1][1]) {
        sorted.push(p);
      }
    }

    let line = "";
    const emit = (count, tag) => {
      const token = count === 1 ? tag : `${count}${tag}`;
      if (line.length + token.length > Rle.LINE_LENGTH) {
        out += line + "\n";
        line = "";
      }
      line += token;
    };

    let row = 0;
    let column = 0;
    let i = 0;
    while (i < sorted.length) {
      const x = sorted[i][0];
      const y = sorted[i][1];
      if (y > row) {
        emit(y - row, "$");
        row = y;
        column = 0;
      }
      if (x > column) {
        emit(x - column, "b");
      }
      let length = 1;
      while (
        i + length < sorted.length &&
        sorted[i + length][1] === y &&
        sorted[i + length][0] === x + length
      ) {
        length++;
      }
      emit(length, "o");
      column = x + length;
      i += length;
    }
    emit(1, "!");
    out += line + "\n";
    return out;
  },
};

export const Patterns = {
  GLIDER: "bob$2bo$3o!",
  BLINKER: "3o!",
  BLOCK: "2o$2o!",
  R_PENTOMINO: "b2o$2o$bo!",
  PULSAR:
    "2b3o3b3o2$o4bobo4bo$o4bobo4bo$o4bobo4bo$2b3o3b3o2$2b3o3b3o$" +
    "o4bobo4bo$o4bobo4bo$o4bobo4bo2$2b3o3b3o!",
  ACORN: "bo$3bo$2o2b3o!",
  DIEHARD: "6bo$2o$bo3b3o!",
  GOSPER_GUN:
    "24bo$22bobo$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o$" +
    "2o8bo3bob2o4bobo$10bo5bo7bo$11bo3bo$12b2o!",
};

// Kept for backward compatibility with existing callers/tests.
export const GOSPER_GUN = [
  "........................O...........",
  "......................O.O...........",
  "............OO......OO............OO",
  "...........O...O....OO............OO",
  "OO........O.....O...OO..............",
  "OO........O...O.OO....O.O...........",
  "..........O.....O.......O...........",
  "...........O...O....................",
  "............OO......................",
];

export class Life {
  constructor(width, height, rule = Rule.CONWAY) {
    this.width = width;
    this.height = height;
    this.rule = rule instanceof Rule ? rule : Rule.parse(rule);
    this.current = new Uint8Array(width * height);
    this.next = new Uint8Array(width * height);
    this.rowMin = new Int32Array(height).fill(width);
    this.rowMax = new Int32Array(height).fill(-1);
    this.nextRowMin = new Int32Array(height).fill(width);
    this.nextRowMax = new Int32Array(height).fill(-1);
    this.generation = 0;
  }

  setRule(rule) {
    this.rule = rule instanceof Rule ? rule : Rule.parse(rule);
  }

  clear() {
    this.current.fill(0);
    this.next.fill(0);
    this.rowMin.fill(this.width);
    this.rowMax.fill(-1);
    this.nextRowMin.fill(this.width);
    this.nextRowMax.fill(-1);
    this.generation = 0;
  }

  set(x, y, val = 1) {
    if (x >= 0 && y >= 0 && x < this.width && y < this.height) {
      const alive = val ? 1 : 0;
      this.current[y * this.width + x] = alive;
      if (alive) {
        if (x < this.rowMin[y]) this.rowMin[y] = x;
        if (x > this.rowMax[y]) this.rowMax[y] = x;
      }
    }
  }

  get(x, y) {
    return this.current[y * this.width + x];
  }

  population() {
    const cur = this.current;
    let total = 0;
    for (let i = 0; i < cur.length; i++) total += cur[i];
    return total;
  }

  cells() {
    const { width, height, current, rowMin, rowMax } = this;
    const out = [];
    for (let y = 0; y < height; y++) {
      const lo = rowMin[y];
      const hi = rowMax[y];
      if (lo > hi) continue;
      const base = y * width;
      for (let x = lo; x <= hi; x++) {
        if (current[base + x]) out.push([x, y]);
      }
    }
    return out;
  }

  toRle(comments = []) {
    return Rle.write(this.cells(), this.rule, comments);
  }

  stamp(lines, cx, cy) {
    const ox = cx - (lines[0].length >> 1);
    const oy = cy - (lines.length >> 1);
    for (let dy = 0; dy < lines.length; dy++) {
      const row = lines[dy];
      for (let dx = 0; dx < row.length; dx++) {
        this.set(ox + dx, oy + dy, row[dx] === "O" ? 1 : 0);
      }
    }
  }

  stampCells(cells, ox, oy) {
    let clipped = 0;
    for (let i = 0; i < cells.length; i++) {
      const x = ox + cells[i][0];
      const y = oy + cells[i][1];
      if (x >= 0 && y >= 0 && x < this.width && y < this.height) {
        this.set(x, y, 1);
      } else {
        clipped++;
      }
    }
    return clipped;
  }

  loadRle(text, { center = true, applyRule = true, maxCells = Rle.DEFAULT_MAX_CELLS } = {}) {
    const pattern = Rle.read(text, maxCells);
    this.clear();
    if (applyRule && pattern.rule) {
      this.rule = pattern.rule;
    }
    let ox = 0;
    let oy = 0;
    if (center && pattern.cells.length > 0) {
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      for (let i = 0; i < pattern.cells.length; i++) {
        const cx = pattern.cells[i][0];
        const cy = pattern.cells[i][1];
        if (cx < minX) minX = cx;
        if (cy < minY) minY = cy;
        if (cx > maxX) maxX = cx;
        if (cy > maxY) maxY = cy;
      }
      const pw = Math.max(pattern.width, maxX - minX + 1);
      const ph = Math.max(pattern.height, maxY - minY + 1);
      ox = Math.floor((this.width - pw) / 2) - minX;
      oy = Math.floor((this.height - ph) / 2) - minY;
    }
    const clipped = this.stampCells(pattern.cells, ox, oy);
    return { ...pattern, clipped };
  }

  step() {
    const { width, height, current, next, rowMin, rowMax, nextRowMin, nextRowMax } = this;
    const birth = this.rule.birth;
    const survive = this.rule.survive;

    // B0 rules birth cells in empty space, so every cell must be evaluated.
    if ((birth & 1) !== 0) {
      for (let y = 0; y < height; y++) {
        const up = ((y + height - 1) % height) * width;
        const mid = y * width;
        const dn = ((y + 1) % height) * width;
        let lo = width;
        let hi = -1;
        for (let x = 0; x < width; x++) {
          const left = (x + width - 1) % width;
          const right = (x + 1) % width;
          const neighbors =
            current[up + left] +
            current[up + x] +
            current[up + right] +
            current[mid + left] +
            current[mid + right] +
            current[dn + left] +
            current[dn + x] +
            current[dn + right];
          const mask = current[mid + x] ? survive : birth;
          const alive = (mask >>> neighbors) & 1;
          next[mid + x] = alive;
          if (alive) {
            if (x < lo) lo = x;
            if (x > hi) hi = x;
          }
        }
        nextRowMin[y] = lo;
        nextRowMax[y] = hi;
      }
    } else {
      // Active-span scan: skips empty rows and empty left/right margins while remaining exact on a torus.
      for (let y = 0; y < height; y++) {
        const yUp = y === 0 ? height - 1 : y - 1;
        const yDn = y === height - 1 ? 0 : y + 1;
        const mid = y * width;

        // Clear stale cells in `next` from two generations ago on this row.
        const prevLo = nextRowMin[y];
        const prevHi = nextRowMax[y];
        if (prevLo <= prevHi) {
          next.fill(0, mid + prevLo, mid + prevHi + 1);
        }

        let spanLo = rowMin[y];
        let spanHi = rowMax[y];
        if (rowMin[yUp] < spanLo) spanLo = rowMin[yUp];
        if (rowMax[yUp] > spanHi) spanHi = rowMax[yUp];
        if (rowMin[yDn] < spanLo) spanLo = rowMin[yDn];
        if (rowMax[yDn] > spanHi) spanHi = rowMax[yDn];

        if (spanLo > spanHi) {
          nextRowMin[y] = width;
          nextRowMax[y] = -1;
          continue;
        }

        const up = yUp * width;
        const dn = yDn * width;
        let lo = width;
        let hi = -1;

        if (spanLo === 0 || spanHi === width - 1) {
          for (let x = 0; x < width; x++) {
            const left = x === 0 ? width - 1 : x - 1;
            const right = x === width - 1 ? 0 : x + 1;
            const neighbors =
              current[up + left] +
              current[up + x] +
              current[up + right] +
              current[mid + left] +
              current[mid + right] +
              current[dn + left] +
              current[dn + x] +
              current[dn + right];
            const mask = current[mid + x] ? survive : birth;
            const alive = (mask >>> neighbors) & 1;
            next[mid + x] = alive;
            if (alive) {
              if (x < lo) lo = x;
              if (x > hi) hi = x;
            }
          }
        } else {
          const xStart = spanLo - 1;
          const xEnd = spanHi + 1;
          for (let x = xStart; x <= xEnd; x++) {
            const left = x === 0 ? width - 1 : x - 1;
            const right = x === width - 1 ? 0 : x + 1;
            const neighbors =
              current[up + left] +
              current[up + x] +
              current[up + right] +
              current[mid + left] +
              current[mid + right] +
              current[dn + left] +
              current[dn + x] +
              current[dn + right];
            const mask = current[mid + x] ? survive : birth;
            const alive = (mask >>> neighbors) & 1;
            if (alive) {
              next[mid + x] = 1;
              if (x < lo) lo = x;
              if (x > hi) hi = x;
            }
          }
        }
        nextRowMin[y] = lo;
        nextRowMax[y] = hi;
      }
    }

    this.current = next;
    this.next = current;
    this.rowMin = nextRowMin;
    this.rowMax = nextRowMax;
    this.nextRowMin = rowMin;
    this.nextRowMax = rowMax;
    this.generation++;
  }
}

// ---------------------------------------------------------------------------
// Falling Sand World (unchanged semantics)
// ---------------------------------------------------------------------------
const DENSITY = [0, 8, 4, 3, 5, 100, 100, 1, 1, 1];
const isLiquid = (a) => a === 2 || a === 3 || a === 4;
const isGas = (a) => a === 8 || a === 9;
const isSolid = (a) => a === 5 || a === 6;
const isFlammable = (a) => a === 6 || a === 3;
const cellType = (a) => a & 15;
const cellClock = (a) => (a >> 4) & 1;
const cellLife = (a) => a >> 5;
const packCell = (type, clock, life) => type | (clock << 4) | (life << 5);
const CHUNK = 16;

export class SandWorld {
  constructor(width, height, seed = 625341585) {
    this.width = width;
    this.height = height;
    this.cells = new Int32Array(width * height);
    this.frame = 0;
    this.seed = seed >>> 0 || 1;
    this.columns = Math.ceil(width / CHUNK);
    this.rows = Math.ceil(height / CHUNK);
    this.awake = new Uint8Array(this.columns * this.rows).fill(1);
    this.nextAwake = new Uint8Array(this.columns * this.rows);
    this.chunksUpdated = 0;
  }

  random(n) {
    let t = this.seed;
    t ^= t << 13;
    t ^= t >>> 17;
    t ^= t << 5;
    this.seed = t >>> 0;
    return this.seed % n;
  }

  inside(x, y) {
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
  }

  typeAt(x, y) {
    return this.inside(x, y) ? cellType(this.cells[y * this.width + x]) : STONE;
  }

  wake(x, y) {
    const cx = Math.floor(x / CHUNK);
    const cy = Math.floor(y / CHUNK);
    for (let r = Math.max(cy - 1, 0); r <= Math.min(cy + 1, this.rows - 1); r++) {
      for (let c = Math.max(cx - 1, 0); c <= Math.min(cx + 1, this.columns - 1); c++) {
        this.nextAwake[r * this.columns + c] = 1;
        this.awake[r * this.columns + c] = 1;
      }
    }
  }

  lifetime(type) {
    return type === FIRE ? 30 + this.random(32) : isGas(type) ? 60 + this.random(64) : 0;
  }

  paint(x, y, type) {
    if (this.inside(x, y)) {
      this.cells[y * this.width + x] = packCell(type, this.frame & 1, this.lifetime(type));
      this.wake(x, y);
    }
  }

  paintDuringFrame(x, y, type) {
    this.cells[y * this.width + x] = packCell(type, (this.frame + 1) & 1, this.lifetime(type));
    this.wake(x, y);
  }

  brush(cx, cy, radius, type) {
    for (let y = cy - radius; y <= cy + radius; y++) {
      for (let x = cx - radius; x <= cx + radius; x++) {
        if ((x - cx) ** 2 + (y - cy) ** 2 <= radius * radius) {
          if (type === EMPTY || isSolid(type) || this.random(3) === 0) {
            this.paint(x, y, type);
          }
        }
      }
    }
  }

  count(type) {
    let total = 0;
    for (const c of this.cells) if (cellType(c) === type) total++;
    return total;
  }

  canEnter(mover, target, dir) {
    if (target === EMPTY) return true;
    if (isSolid(target) || target === FIRE) return false;
    if (dir === "down") return DENSITY[mover] > DENSITY[target];
    if (dir === "up") return DENSITY[mover] < DENSITY[target];
    return false;
  }

  swap(x1, y1, x2, y2, clock) {
    const i1 = y1 * this.width + x1;
    const i2 = y2 * this.width + x2;
    const a = this.cells[i1];
    const b = this.cells[i2];
    this.cells[i2] = packCell(cellType(a), clock, cellLife(a));
    this.cells[i1] = cellType(b) === EMPTY ? 0 : packCell(cellType(b), clock, cellLife(b));
    this.wake(x1, y1);
    this.wake(x2, y2);
  }

  tryMove(x, y, nx, ny, type, dir, clock) {
    if (!this.inside(nx, ny) || !this.canEnter(type, this.typeAt(nx, ny), dir)) return false;
    this.swap(x, y, nx, ny, clock);
    return true;
  }

  updateFalling(x, y, type, clock) {
    if (this.tryMove(x, y, x, y + 1, type, "down", clock)) return true;
    const dir = this.random(2) ? 1 : -1;
    return !!(
      this.tryMove(x, y, x + dir, y + 1, type, "down", clock) ||
      this.tryMove(x, y, x - dir, y + 1, type, "down", clock) ||
      (isLiquid(type) &&
        ((this.typeAt(x + dir, y) === EMPTY && this.tryMove(x, y, x + dir, y, type, "down", clock)) ||
          (this.typeAt(x - dir, y) === EMPTY && this.tryMove(x, y, x - dir, y, type, "down", clock))))
    );
  }

  updateGas(x, y, type, clock, life) {
    if (life <= 0) {
      this.cells[y * this.width + x] = type === STEAM && this.random(3) === 0 ? packCell(WATER, clock, 0) : 0;
      this.wake(x, y);
      return;
    }
    this.cells[y * this.width + x] = packCell(type, clock, life - 1);
    const dir = this.random(2) ? 1 : -1;
    if (
      !this.tryMove(x, y, x, y - 1, type, "up", clock) &&
      !this.tryMove(x, y, x + dir, y - 1, type, "up", clock)
    ) {
      if (this.typeAt(x + dir, y) === EMPTY) {
        this.swap(x, y, x + dir, y, clock);
      } else {
        this.wake(x, y);
      }
    }
  }

  updateFire(x, y, clock, life) {
    let hasFuel = false;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx;
      const ny = y + dy;
      const t = this.typeAt(nx, ny);
      if (this.inside(nx, ny)) {
        if (isFlammable(t)) {
          hasFuel = true;
          if (this.random(12) === 0) this.paintDuringFrame(nx, ny, FIRE);
        } else if (t === WATER) {
          this.paintDuringFrame(nx, ny, STEAM);
          this.cells[y * this.width + x] = 0;
          this.wake(x, y);
          return;
        }
      }
    }
    if (life <= 0) {
      this.cells[y * this.width + x] = 0;
      this.wake(x, y);
      if (this.random(2) === 0) this.paintDuringFrame(x, y, SMOKE);
      return;
    }
    this.cells[y * this.width + x] = packCell(FIRE, clock, life - 1);
    this.wake(x, y);
    if (!hasFuel && this.typeAt(x, y - 1) === EMPTY && this.random(3) === 0) {
      this.swap(x, y, x, y - 1, clock);
    }
  }

  updateAcid(x, y, clock) {
    for (const [dx, dy] of [[0, 1], [1, 0], [-1, 0]]) {
      const nx = x + dx;
      const ny = y + dy;
      const t = this.typeAt(nx, ny);
      if (this.inside(nx, ny) && (t === WOOD || t === SAND || t === STONE) && this.random(t === STONE ? 40 : 8) === 0) {
        this.cells[ny * this.width + nx] = 0;
        this.cells[y * this.width + x] = 0;
        this.wake(x, y);
        this.wake(nx, ny);
        return;
      }
    }
    this.updateFalling(x, y, ACID, clock);
  }

  step() {
    const clock = (this.frame + 1) & 1;
    const leftToRight = this.frame % 2 === 0;
    this.nextAwake.fill(0);
    this.chunksUpdated = 0;
    const { width, height, columns, rows, awake, cells } = this;
    for (let r = rows - 1; r >= 0; r--) {
      for (let c = 0; c < columns; c++) {
        const col = leftToRight ? c : columns - 1 - c;
        if (!awake[r * columns + col]) continue;
        this.chunksUpdated++;
        const y0 = r * CHUNK;
        const y1 = Math.min(y0 + CHUNK, height);
        const x0 = col * CHUNK;
        const x1 = Math.min(x0 + CHUNK, width);
        for (let y = y1 - 1; y >= y0; y--) {
          for (let x = x0; x < x1; x++) {
            const px = leftToRight ? x : x1 - 1 - (x - x0);
            const g = cells[y * width + px];
            const type = cellType(g);
            if (type === EMPTY || isSolid(type) || cellClock(g) === clock) continue;
            cells[y * width + px] = packCell(type, clock, cellLife(g));
            if (type === FIRE) this.updateFire(px, y, clock, cellLife(g));
            else if (isGas(type)) this.updateGas(px, y, type, clock, cellLife(g));
            else if (type === ACID) this.updateAcid(px, y, clock);
            else this.updateFalling(px, y, type, clock);
          }
        }
      }
    }
    this.awake.set(this.nextAwake);
    this.frame++;
  }
}

// ---------------------------------------------------------------------------
// Browser UI bootstrap (strict CSP: all event handlers bound here)
// ---------------------------------------------------------------------------
if (typeof document !== "undefined" && document.getElementById("view")) {
  const canvas = document.getElementById("view");
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  const img = ctx.createImageData(width, height);
  const pixels = new Uint32Array(img.data.buffer);
  const statusEl = document.getElementById("status");
  const materialsEl = document.getElementById("materials");
  const lifeControlsEl = document.getElementById("life-controls");
  const rlePanelEl = document.getElementById("rle-panel");
  const ruleInputEl = document.getElementById("rule-input");
  const ruleFeedbackEl = document.getElementById("rule-feedback");
  const rleTextEl = document.getElementById("rle-text");
  const rleFeedbackEl = document.getElementById("rle-feedback");
  const rulePresetButtons = [...document.querySelectorAll(".rule-preset")];
  const patternPresetButtons = [...document.querySelectorAll(".pattern-preset")];

  const rgba = (r, g, b) => (255 << 24) | (b << 16) | (g << 8) | r;
  const palette = [];
  palette[EMPTY] = rgba(6, 8, 13);
  palette[SAND] = rgba(226, 192, 110);
  palette[WATER] = rgba(56, 130, 246);
  palette[OIL] = rgba(120, 80, 40);
  palette[ACID] = rgba(120, 230, 70);
  palette[STONE] = rgba(110, 118, 130);
  palette[WOOD] = rgba(130, 84, 50);
  palette[FIRE] = rgba(250, 120, 30);
  palette[SMOKE] = rgba(70, 72, 80);
  palette[STEAM] = rgba(170, 190, 205);
  const lifeColor = rgba(56, 189, 248);

  let mode = "sand";
  let paused = false;
  let material = SAND;
  let drawing = false;
  let sandWorld;
  let lifeWorld;

  const setFeedback = (el, msg, kind = "") => {
    el.textContent = msg;
    el.className = kind ? `feedback ${kind}` : "feedback";
  };

  const syncRuleUI = () => {
    const notation = lifeWorld.rule.notation;
    ruleInputEl.value = notation;
    for (const btn of rulePresetButtons) {
      btn.setAttribute("aria-pressed", String(btn.dataset.rule === notation));
    }
  };

  const resetSandScene = () => {
    sandWorld = new SandWorld(width, height);
    for (let x = 40; x < 110; x++) sandWorld.paint(x, 90, WOOD);
    for (let x = 140; x < 210; x++) sandWorld.paint(x, 110 - ((x - 140) >> 2), STONE);
    sandWorld.brush(70, 25, 12, SAND);
    sandWorld.brush(175, 25, 14, WATER);
    sandWorld.brush(120, 40, 7, OIL);
    sandWorld.paint(75, 89, FIRE);
  };

  const resetLifeScene = () => {
    const currentRule = lifeWorld ? lifeWorld.rule : Rule.CONWAY;
    lifeWorld = new Life(width, height, currentRule);
    lifeWorld.stamp(GOSPER_GUN, 40, 30);
    const rand = (n) => Math.floor(Math.random() * n);
    for (let k = 0; k < 8; k++) {
      lifeWorld.stamp(["OOO", "O..", ".O."], 120 + rand(100), 60 + rand(70));
    }
    syncRuleUI();
  };

  const applyRuleText = (raw) => {
    try {
      const parsed = Rule.parse(raw);
      lifeWorld.setRule(parsed);
      syncRuleUI();
      setFeedback(ruleFeedbackEl, `Active rule: ${parsed.notation}`, "ok");
    } catch (err) {
      setFeedback(ruleFeedbackEl, err.message, "error");
    }
  };

  const loadPreset = (key) => {
    const rle = Patterns[key];
    if (!rle) return;
    lifeWorld.loadRle(rle, { center: true, applyRule: false });
    setFeedback(rleFeedbackEl, `Loaded preset ${key.toLowerCase().replace("_", " ")} (${lifeWorld.population()} cells).`, "ok");
    renderFrame();
  };

  const setMode = (nextMode) => {
    mode = nextMode;
    document.getElementById("mode-sand").setAttribute("aria-pressed", String(mode === "sand"));
    document.getElementById("mode-life").setAttribute("aria-pressed", String(mode === "life"));
    materialsEl.classList.toggle("hidden", mode !== "sand");
    lifeControlsEl.classList.toggle("active", mode === "life");
    rlePanelEl.classList.toggle("active", mode === "life");
    renderFrame();
  };

  const paintAtEvent = (ev) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((ev.clientX - rect.left) / rect.width) * width);
    const y = Math.floor(((ev.clientY - rect.top) / rect.height) * height);
    if (mode === "sand") {
      sandWorld.brush(x, y, 3, material);
    } else {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (Math.random() < 0.6) lifeWorld.set(x + dx, y + dy, 1);
        }
      }
    }
  };

  const renderFrame = () => {
    if (mode === "sand") {
      const cells = sandWorld.cells;
      for (let i = 0; i < pixels.length; i++) pixels[i] = palette[cells[i] & 15];
      const totalChunks = sandWorld.columns * sandWorld.rows;
      statusEl.textContent = `frame ${sandWorld.frame}, chunks updated ${sandWorld.chunksUpdated} of ${totalChunks}`;
    } else {
      const cur = lifeWorld.current;
      for (let i = 0; i < pixels.length; i++) pixels[i] = cur[i] ? lifeColor : palette[EMPTY];
      statusEl.textContent = `rule ${lifeWorld.rule.notation}, generation ${lifeWorld.generation}, population ${lifeWorld.population()}`;
    }
    ctx.putImageData(img, 0, 0);
  };

  const tick = () => {
    if (!paused) {
      if (mode === "sand") sandWorld.step();
      else lifeWorld.step();
    }
    renderFrame();
    window.__silicaReady = true;
    requestAnimationFrame(tick);
  };

  // Build Sand material buttons
  const materials = [
    ["Sand", SAND],
    ["Water", WATER],
    ["Oil", OIL],
    ["Acid", ACID],
    ["Fire", FIRE],
    ["Wood", WOOD],
    ["Stone", STONE],
    ["Steam", STEAM],
    ["Eraser", EMPTY],
  ];
  for (const [label, id] of materials) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = label;
    btn.setAttribute("aria-pressed", String(id === material));
    btn.addEventListener("click", () => {
      material = id;
      for (const child of materialsEl.children) {
        child.setAttribute("aria-pressed", String(child === btn));
      }
    });
    materialsEl.append(btn);
  }

  document.getElementById("mode-sand").addEventListener("click", () => setMode("sand"));
  document.getElementById("mode-life").addEventListener("click", () => setMode("life"));
  document.getElementById("pause").addEventListener("click", (ev) => {
    paused = !paused;
    ev.currentTarget.setAttribute("aria-pressed", String(paused));
    ev.currentTarget.textContent = paused ? "Resume" : "Pause";
  });
  document.getElementById("step").addEventListener("click", () => {
    if (mode === "sand") sandWorld.step();
    else lifeWorld.step();
    renderFrame();
  });
  document.getElementById("clear").addEventListener("click", () => {
    if (mode === "sand") sandWorld = new SandWorld(width, height);
    else lifeWorld.clear();
    renderFrame();
  });
  document.getElementById("scene").addEventListener("click", () => {
    if (mode === "sand") resetSandScene();
    else resetLifeScene();
    renderFrame();
  });

  document.getElementById("rule-apply").addEventListener("click", () => applyRuleText(ruleInputEl.value));
  ruleInputEl.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      applyRuleText(ruleInputEl.value);
    }
  });
  for (const btn of rulePresetButtons) {
    btn.addEventListener("click", () => applyRuleText(btn.dataset.rule));
  }
  for (const btn of patternPresetButtons) {
    btn.addEventListener("click", () => loadPreset(btn.dataset.pattern));
  }

  document.getElementById("rle-import").addEventListener("click", () => {
    const raw = rleTextEl.value;
    if (!raw.trim()) {
      setFeedback(rleFeedbackEl, "Paste an RLE pattern first.", "error");
      return;
    }
    try {
      const res = lifeWorld.loadRle(raw, { center: true, applyRule: true });
      syncRuleUI();
      setFeedback(ruleFeedbackEl, "");
      const label = res.name ? `"${res.name}" ` : "";
      const clipNote = res.clipped > 0 ? ` (${res.clipped} clipped outside ${width}x${height})` : "";
      setFeedback(
        rleFeedbackEl,
        `Imported ${label}${res.width}x${res.height}, ${res.cells.length} cells, rule ${lifeWorld.rule.notation}${clipNote}.`,
        "ok",
      );
      renderFrame();
    } catch (err) {
      setFeedback(rleFeedbackEl, err.message, "error");
    }
  });

  document.getElementById("rle-export").addEventListener("click", async () => {
    try {
      const rle = lifeWorld.toRle();
      rleTextEl.value = rle;
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        try {
          await navigator.clipboard.writeText(rle);
          setFeedback(rleFeedbackEl, `Exported ${lifeWorld.population()} cells (${lifeWorld.rule.notation}) and copied to clipboard.`, "ok");
          return;
        } catch {
          // Fall through to non-clipboard status when permission is denied.
        }
      }
      setFeedback(rleFeedbackEl, `Exported ${lifeWorld.population()} cells (${lifeWorld.rule.notation}).`, "ok");
    } catch (err) {
      setFeedback(rleFeedbackEl, err.message, "error");
    }
  });

  canvas.addEventListener("pointerdown", (ev) => {
    drawing = true;
    canvas.setPointerCapture(ev.pointerId);
    paintAtEvent(ev);
    renderFrame();
  });
  canvas.addEventListener("pointermove", (ev) => {
    if (drawing) {
      paintAtEvent(ev);
      renderFrame();
    }
  });
  canvas.addEventListener("pointerup", () => { drawing = false; });
  canvas.addEventListener("pointercancel", () => { drawing = false; });

  resetSandScene();
  resetLifeScene();
  setMode(location.hash === "#life" ? "life" : "sand");
  tick();
}
