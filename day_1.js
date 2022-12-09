// the puzzle input as an array
// const input = readFile(process.argv[2]).split("\n");
/**
 * node day_1.js day_1.txt
 * node day_1.js test.txt
 */
// const input = readFile("./test.txt").split("\n");

const fs = require("fs");
const readFile = (path) => fs.readFileSync(path, { encoding: "utf8" });
const input = readFile("./day_1.txt").split("\n");

let sum = 0;
let first = 0;
let second = 0;
let third = 0;

for (let i of input) {
  if (i === "") {
    if (sum > first) [first, second, third] = [sum, first, second];
    if (sum < first && sum > second) [second, third] = [sum, second];
    if (sum < first && sum < second && sum > third) third = sum;
    sum = 0;
  } else {
    sum += Number(i);
  }
}
console.log(first + second + third);
