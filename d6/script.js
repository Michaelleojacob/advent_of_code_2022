const fs = require("fs");
const readFile = (path) => fs.readFileSync(path, { encoding: "utf8" });
const s = readFile("./input.txt");

const len = s.length;
// const len = 5;

// const setSize = 4
const setSize = 14;

for (let i = 0; i < len; i++) {
  const set = new Set(s.slice(i, i + setSize));
  if (set.size === setSize) {
    return console.log(i + setSize);
  }
}

// const str = "hello";
// console.log(str.slice(1, 3));
