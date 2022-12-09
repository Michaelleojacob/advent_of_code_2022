const fs = require("fs");
const readFile = (path) => fs.readFileSync(path, { encoding: "utf8" });
const input = readFile("./round2.txt").split("\n");

// console.log(input);

/**
 * rock (a | x) 1
 * paper (b | y) 2
 * scissors (c | z) 3
 *
 * loss 0
 * draw 3
 * win 6
 *
 * round 2:
 *  X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win.
 */

// const round2shape = new Map([
//   ["A X", "Z"],
//   ["A Y", "X"],
//   ["A Z", "Y"],
//   ["B X", "X"],
//   ["B Y", "Y"],
//   ["B Z", "Z"],
//   ["C X", "Y"],
//   ["C Y", "Z"],
//   ["C Z", "X"],
// ]);

const pairs = {
  A: "X", // ROCK LOSE
  B: "Y", // PAPER TIE
  C: "Z", // SCISSORS WIN
};

const round1Shape = {
  X: 1,
  Y: 2,
  Z: 3,
};

const round1Outcomes = {
  "A X": 3,
  "A Y": 6,
  "A Z": 0,
  "B X": 0,
  "B Y": 3,
  "B Z": 6,
  "C X": 6,
  "C Y": 0,
  "C Z": 3,
};

const round2shape = {
  "A X": 3,
  "A Y": 1,
  "A Z": 2,
  "B X": 1,
  "B Y": 2,
  "B Z": 3,
  "C X": 2,
  "C Y": 3,
  "C Z": 1,
};

const roundTwoOutcomes = {
  X: 0,
  Y: 3,
  Z: 6,
};

let sum = 0;

for (const item of input) {
  // sum += pointsPerShape[item[2]];
  // sum += outcomes[item];
  sum += roundTwoOutcomes[item[2]];
  sum += round2shape[item];
}

console.log(sum);

//15400 too high
