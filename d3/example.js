const fs = require("fs");
const readFile = (path) => fs.readFileSync(path, { encoding: "utf8" });
const input = readFile("./one.txt").split("\n");

const start = Date.now();

const alphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

const lettersOccurOnce = (s1, s2) => {
  for (const letter of s1) {
    if (s2.includes(letter)) return letter;
  }
};

const checkThreeStringsAtOnce = ([s1, s2, s3]) => {
  for (const l of s1) {
    if (s2.includes(l)) {
      if (s3.includes(l)) return l;
    }
  }
};

const roundOne = () => {
  let sum = 0;

  for (item of input) {
    const length = item.length;
    const mid = Math.floor(length / 2);
    const firstHalf = item.slice(0, mid);
    const secondhalf = item.slice(mid, length);

    const letter = lettersOccurOnce(firstHalf, secondhalf);
    sum += alphabet[letter];
  }
  console.log(sum);
  return sum;
};

const roundTwo = () => {
  let arr = [];
  let sum = 0;
  for (item of input) {
    arr.push(item);
    if (arr.length === 3) {
      const letter = checkThreeStringsAtOnce(arr);
      sum += alphabet[letter];
      arr = [];
    }
  }
  console.log(sum);
};

roundTwo();

console.log(Date.now() - start);
