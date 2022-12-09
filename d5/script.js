const fs = require("fs");
const readFile = (path) => fs.readFileSync(path, { encoding: "utf8" });
const test = readFile("./t.txt").split("\n");
const input = readFile("./o.txt").split("\n");

const arr = [
  [],
  ["D", "B", "J", "V"],
  ["P", "V", "B", "W", "R", "D", "F"],
  ["R", "G", "F", "L", "D", "C", "W", "Q"],
  ["W", "J", "P", "M", "L", "N", "D", "B"],
  ["H", "N", "B", "P", "C", "S", "Q"],
  ["R", "D", "B", "S", "N", "G"],
  ["Z", "B", "P", "M", "Q", "F", "S", "H"],
  ["W", "L", "F"],
  ["S", "V", "F", "M", "R"],
];

const logger = () => {
  console.log(arr[1][arr[1].length - 1]);
  console.log(arr[2][arr[2].length - 1]);
  console.log(arr[3][arr[3].length - 1]);
  console.log(arr[4][arr[4].length - 1]);
  console.log(arr[5][arr[5].length - 1]);
  console.log(arr[6][arr[6].length - 1]);
  console.log(arr[7][arr[7].length - 1]);
  console.log(arr[8][arr[8].length - 1]);
  console.log(arr[9][arr[9].length - 1]);
};

const roundOne = () => {
  for (let item of input) {
    let curr = item.split(" ");

    const [num, loc, newLoc] = [curr[1], curr[3], curr[5]];

    for (let i = 0; i < num; i++) {
      arr[newLoc].push(arr[loc].pop());
    }
  }
  logger();
};

// roundOne();
// ["B", "S", "D", "M", "Q", "F", "L", "S", "P"];

// const len = 3;
const len = input.length;

const roundTwo = () => {
  for (let i = 0; i < len; i++) {
    let item = input[i];
    let curr = item.split(" ");

    const [num, loc, newLoc] = [curr[1], curr[3], curr[5]];

    const items = arr[loc].splice(arr[loc].length - num, arr[loc].length);
    arr[newLoc].push(...items);
  }
  logger();
};

roundTwo();
