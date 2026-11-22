// Checks the rules without a browser: node silica/test.mjs
import assert from "node:assert/strict";
import {
  Life,
  Rule,
  Rle,
  Patterns,
  GOSPER_GUN,
  SandWorld,
  SAND,
  WATER,
  OIL,
  STONE,
  WOOD,
  FIRE,
  EMPTY,
  ACID,
} from "./sim.js";

// ---------------------------------------------------------------------------
// Existing Life checks
// ---------------------------------------------------------------------------
// A blinker has period two, and a glider moves one cell diagonally in four generations.
let life = new Life(16, 16);
life.stamp(["OOO"], 8, 8);
const start = life.current.slice();
life.step();
assert.equal(life.get(8, 7) + life.get(8, 8) + life.get(8, 9), 3);
assert.equal(life.get(7, 8), 0);
life.step();
assert.deepEqual(life.current, start);

life = new Life(32, 32);
life.stamp([".O.", "..O", "OOO"], 5, 5);
const before = [...life.current.keys()].filter((i) => life.current[i]);
for (let i = 0; i < 4; i++) life.step();
const after = [...life.current.keys()].filter((i) => life.current[i]);
assert.deepEqual(after, before.map((i) => i + 33));

// The gun produces a new glider every 30 generations, so it grows by 5 cells each time.
life = new Life(120, 80);
life.stamp(GOSPER_GUN, 30, 20);
const first = life.population();
for (let i = 0; i < 30; i++) life.step();
assert.equal(life.population(), first + 5);

// ---------------------------------------------------------------------------
// Rule parsing and Life-like rules (matching Silica Kotlin RuleTest)
// ---------------------------------------------------------------------------
assert.equal(Rule.CONWAY.notation, "B3/S23");
assert.equal(Rule.parse("b63/s32").notation, "B36/S23");
assert.equal(Rule.parse(" B36/S23 ").notation, "B36/S23");
assert.equal(new Rule(0, 0).notation, "B/S");
assert.equal(Rule.parse("B2/S").notation, "B2/S");
assert.equal(Rule.parse("B3678/S34678").notation, "B3678/S34678");

// Older S/B notation
assert.ok(Rule.parse("23/3").equals(Rule.CONWAY));
assert.ok(Rule.parse("23/36").equals(Rule.parse("B36/S23")));
assert.ok(Rule.parse("/2").equals(Rule.parse("B2/S")));
assert.ok(Rule.parse("/").equals(new Rule(0, 0)));

// Invalid rules and masks rejected
for (const bad of [
  "S23/B3",
  "B9/S23",
  "B3/S29",
  "29/3",
  "23/9",
  "B3S23",
  "LifeHistory",
  "",
  "B-1/S2",
  "B3/S2/3",
]) {
  assert.throws(() => Rule.parse(bad), `expected Rule.parse(${JSON.stringify(bad)}) to fail`);
}
assert.throws(() => new Rule(1 << 9, 0));
assert.throws(() => new Rule(0, -1));
assert.ok(Rule.CONWAY.born(3) && !Rule.CONWAY.born(2));
assert.ok(Rule.CONWAY.survives(2) && Rule.CONWAY.survives(3) && !Rule.CONWAY.survives(4));

// Random rules canonical notation round-trip
{
  let s = 7;
  const rand = (n) => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s % n;
  };
  for (let i = 0; i < 500; i++) {
    const r = new Rule(rand(512), rand(512));
    assert.ok(Rule.parse(r.notation).equals(r));
  }
}

// Seeds (B2/S): every live cell dies on the next tick, while dead cells with 2 neighbors are born.
{
  const seeds = new Life(16, 16, Rule.parse("B2/S"));
  seeds.set(7, 7, 1);
  seeds.set(8, 7, 1);
  seeds.step();
  assert.equal(seeds.get(7, 7), 0);
  assert.equal(seeds.get(8, 7), 0);
  assert.equal(seeds.get(7, 6), 1);
  assert.equal(seeds.get(8, 6), 1);
  assert.equal(seeds.get(7, 8), 1);
  assert.equal(seeds.get(8, 8), 1);
  assert.equal(seeds.population(), 4);
}

// HighLife (B36/S23): 6 live neighbors birth a dead cell (unlike Conway).
{
  const highLife = new Life(8, 8, "B36/S23");
  const conway = new Life(8, 8, "B3/S23");
  for (const [x, y] of [[3, 3], [4, 3], [5, 3], [3, 5], [4, 5], [5, 5]]) {
    highLife.set(x, y, 1);
    conway.set(x, y, 1);
  }
  highLife.step();
  conway.step();
  assert.equal(highLife.get(4, 4), 1);
  assert.equal(conway.get(4, 4), 0);
}

// Day & Night (B3678/S34678) commutes with inverting every cell on a torus.
{
  const dn = Rule.parse("B3678/S34678");
  const w = 36, h = 24;
  const normal = new Life(w, h, dn);
  const inverted = new Life(w, h, dn);
  let s = 11;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
      const alive = (s & 1) === 1 ? 1 : 0;
      normal.set(x, y, alive);
      inverted.set(x, y, 1 - alive);
    }
  }
  for (let g = 0; g < 20; g++) {
    normal.step();
    inverted.step();
    for (let i = 0; i < w * h; i++) {
      assert.equal(normal.current[i], 1 - inverted.current[i], `Day & Night inversion gen ${g + 1}`);
    }
  }
}

// B0 rule (B0/S8) turns an empty grid completely alive on generation 1.
{
  const b0 = new Life(8, 6, "B0/S8");
  b0.step();
  assert.equal(b0.population(), 48);
  b0.step();
  assert.equal(b0.population(), 48);
}

// ---------------------------------------------------------------------------
// RLE read/write and round-trip checks (matching Silica Kotlin RleTest)
// ---------------------------------------------------------------------------
{
  const pat = Rle.read(
    "#N Glider\n#C The smallest spaceship.\n#c Second comment.\n#O someone\nx = 3, y = 3, rule = B36/S23\nbob$2bo$3o!\n",
  );
  assert.equal(pat.name, "Glider");
  assert.deepEqual(pat.comments, ["The smallest spaceship.", "Second comment."]);
  assert.equal(pat.width, 3);
  assert.equal(pat.height, 3);
  assert.ok(pat.rule.equals(Rule.parse("B36/S23")));
  assert.deepEqual(pat.cells, Rle.parse(Patterns.GLIDER));
}

// Rule topology suffixes, legacy S/B notation, whitespace, and trailing text after `!`
{
  const pat = Rle.read("x=2,y=1,rule=23/3:T64,64\n2o !\n trailing text is ignored");
  assert.ok(pat.rule.equals(Rule.CONWAY));
  assert.deepEqual(pat.cells, [[0, 0], [1, 0]]);

  const spaced = Rle.read("x = 3, y = 1\n o b o !");
  assert.equal(spaced.rule, null);
  assert.deepEqual(spaced.cells, [[0, 0], [2, 0]]);
}

// Missing header falls back to measured size
{
  const pat = Rle.read("bo$3o!");
  assert.equal(pat.width, 3);
  assert.equal(pat.height, 2);
  assert.equal(pat.rule, null);
}

// parse skips uninterpretable header; read rejects it
{
  const text = "x = 1, y = 1, rule = LifeHistory\no!";
  assert.deepEqual(Rle.parse(text), [[0, 0]]);
  assert.throws(() => Rle.read(text));
  assert.throws(() => Rle.read("x = -1, y = 1\no!"));
  assert.throws(() => Rle.read("x = 3, y\no!"));
  assert.throws(() => Rle.read("x = 1abc, y = 1\no!"));
  assert.throws(() => Rle.read("x = 1, y = 1, rule = B9/S23\no!"));
  assert.throws(() => Rle.read(`x = ${Rle.MAX_COORDINATE + 1}, y = 1\no!`));
}

// Canonical write format
assert.equal(Rle.write(Rle.parse(Patterns.GLIDER)), "x = 3, y = 3, rule = B3/S23\nbo$2bo$3o!\n");
assert.equal(Rle.write([[5, 7], [5, 10]]), "x = 1, y = 4, rule = B3/S23\no3$o!\n");
assert.equal(
  Rle.write([[-4, -4], [-3, -4], [-3, -4]], Rule.parse("B36/S23"), ["two\nlines"]),
  "#C two\n#C lines\nx = 2, y = 1, rule = B36/S23\n2o!\n",
);
{
  const empty = Rle.write([]);
  assert.equal(empty, "x = 0, y = 0, rule = B3/S23\n!\n");
  assert.deepEqual(Rle.read(empty).cells, []);
}

// Hostile RLE input fails cleanly
{
  const wide = "999999b".repeat(2000) + "o!";
  assert.throws(() => Rle.parse(wide));
  const tall = "999999$".repeat(2000) + "o!";
  assert.throws(() => Rle.parse(tall));
  assert.throws(() => Rle.parse("100000o$".repeat(20), 500_000));
  assert.throws(() => Rle.parse("1000001o!"));
  assert.throws(() => Rle.parse("3x!"));
  assert.equal(Rle.parse("4o!", 4).length, 4);
  assert.throws(() => Rle.parse("5o!", 4));
  assert.throws(() => Rle.read("o!", -1));
  assert.throws(() => Rle.write([[0, 0], [Rle.MAX_COORDINATE + 1, 0]]));
}

// Random RLE round-trip (100 trials with line-length <= 70 verification)
{
  let s = 42;
  const rand = (n) => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s % n;
  };
  for (let trial = 0; trial < 100; trial++) {
    const w = 1 + rand(120);
    const h = 1 + rand(30);
    const threshold = rand(100);
    const cells = [];
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (rand(100) < threshold) cells.push([x - 50, y + 9]);
      }
    }
    if (cells.length === 0) continue;
    const rule = new Rule(rand(512), rand(512));
    const text = Rle.write(cells, rule);
    for (const line of text.split("\n")) {
      assert.ok(line.length <= Rle.LINE_LENGTH, `trial ${trial}: line too long (${line.length})`);
    }
    const back = Rle.read(text);
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const [x, y] of cells) {
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
    const expected = cells.map(([x, y]) => [x - minX, y - minY]);
    assert.deepEqual(back.cells, expected, `trial ${trial}`);
    assert.equal(back.width, maxX - minX + 1);
    assert.equal(back.height, maxY - minY + 1);
    assert.ok(back.rule.equals(rule));
  }
}

// Built-in patterns round-trip through Rle and Life.loadRle/toRle
for (const [name, rle] of Object.entries(Patterns)) {
  const cells = Rle.parse(rle);
  assert.deepEqual(Rle.parse(Rle.write(cells)), cells, `pattern ${name} RLE round-trip`);
  const board = new Life(80, 80);
  board.loadRle(Rle.write(cells, Rule.parse("B36/S23")));
  assert.equal(board.population(), cells.length, `pattern ${name} loadRle`);
  assert.ok(board.rule.equals(Rule.parse("B36/S23")));
  assert.deepEqual(Rle.parse(board.toRle()), cells, `pattern ${name} toRle`);
}

// ---------------------------------------------------------------------------
// Known pattern facts (GoldenTest): Diehard and Acorn under B3/S23
// ---------------------------------------------------------------------------
// Diehard vanishes at generation 130 and not one generation earlier.
{
  const board = new Life(160, 160, Rule.CONWAY);
  board.loadRle(Patterns.DIEHARD);
  assert.equal(board.population(), 7);
  for (let i = 0; i < 129; i++) board.step();
  assert.ok(board.population() > 0, "diehard is still alive at generation 129");
  board.step();
  assert.equal(board.generation, 130);
  assert.equal(board.population(), 0, "diehard vanishes at generation 130");
}

// Acorn settles at generation 5206 with 633 cells (including 13 escaping gliders).
{
  const board = new Life(2600, 2600, Rule.CONWAY);
  board.loadRle(Patterns.ACORN);
  assert.equal(board.population(), 7);
  for (let i = 0; i < 5000; i++) board.step();
  assert.notEqual(board.population(), 633, "acorn is still changing at generation 5000");
  for (let i = 0; i < 206; i++) board.step();
  assert.equal(board.generation, 5206);
  assert.equal(board.population(), 633, "acorn reaches 633 cells at generation 5206");
  board.step();
  board.step();
  assert.equal(board.population(), 633, "acorn population holds after settling");
}

// ---------------------------------------------------------------------------
// Existing Falling Sand checks
// ---------------------------------------------------------------------------
// Sand falls one cell a frame, not to the floor at once, and it stops on the floor.
let world = new SandWorld(8, 8);
world.paint(4, 0, SAND);
world.step();
assert.equal(world.typeAt(4, 1), SAND);
assert.equal(world.typeAt(4, 2), EMPTY);
for (let i = 0; i < 20; i++) world.step();
assert.equal(world.typeAt(4, 7), SAND);

// Matter is conserved, including through sand sinking in water and oil floating on it.
world = new SandWorld(32, 32);
world.brush(16, 6, 5, SAND);
world.brush(8, 10, 5, WATER);
world.brush(24, 10, 5, OIL);
const counts = [world.count(SAND), world.count(WATER), world.count(OIL)];
for (let i = 0; i < 600; i++) world.step();
assert.deepEqual([world.count(SAND), world.count(WATER), world.count(OIL)], counts);
const heights = (t) => {
  let total = 0, n = 0;
  for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) if (world.typeAt(x, y) === t) { total += y; n++; }
  return total / n;
};
assert.ok(heights(OIL) < heights(WATER), "oil floats on water");

// In water deeper than the pile, all the sand ends up below the water.
world = new SandWorld(32, 32);
for (let y = 12; y < 32; y++) for (let x = 0; x < 32; x++) world.paint(x, y, WATER);
world.brush(16, 5, 3, SAND);
const grains = world.count(SAND);
for (let i = 0; i < 800; i++) world.step();
assert.equal(world.count(SAND), grains);
assert.ok(heights(WATER) < heights(SAND), "sand sinks in water");

// Fire burns wood away and goes out, and stone is left alone.
world = new SandWorld(32, 32);
for (let x = 8; x < 24; x++) { world.paint(x, 20, WOOD); world.paint(x, 21, STONE); }
world.paint(16, 19, FIRE);
for (let i = 0; i < 2000; i++) world.step();
assert.ok(world.count(WOOD) <= 4, `most of the wood burns, and ${world.count(WOOD)} is left`);
assert.equal(world.count(FIRE), 0);
assert.equal(world.count(STONE), 16);

// Acid eats through wood.
world = new SandWorld(16, 16);
for (let x = 0; x < 16; x++) world.paint(x, 10, WOOD);
world.brush(8, 4, 3, ACID);
const wood = world.count(WOOD);
for (let i = 0; i < 500; i++) world.step();
assert.ok(world.count(WOOD) < wood);

// Once everything has settled, regions go to sleep and a frame does almost nothing.
world = new SandWorld(96, 96);
world.brush(48, 10, 6, SAND);
for (let i = 0; i < 400; i++) world.step();
world.step();
assert.equal(world.chunksUpdated, 0, "a settled world does no work");
world.paint(10, 10, SAND);
world.step();
assert.ok(world.chunksUpdated > 0 && world.chunksUpdated < 12, "and a change wakes only what is near it");

console.log("all silica checks passed");
