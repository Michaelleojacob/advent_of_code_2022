const fs = require("fs");
const readFile = (path) => fs.readFileSync(path, { encoding: "utf8" });
// const input = readFile("./example.txt").split(",");
const input = readFile("./one.txt").split(",");

// const multiplyFish = () => {
//   const arr = [[...input]];
//   for (i = 0; i < 256; i++) {
//     const curr = arr[arr.length - 1];
//     const newArr = [];
//     for (const item of curr) {
//       const num = Number(item);
//       if (num === 0) {
//         newArr.push(6, 8);
//       } else {
//         newArr.push(num - 1);
//       }
//     }
//     arr.push(newArr);
//   }
//   const res = arr.pop().length;
//   console.log(res);
//   return res;
// };

// multiplyFish();

// const fishPop = () => {
//   let map = new Map([
//     [8, 0],
//     [7, 0],
//     [6, 0],
//     [5, 0],
//     [4, 0],
//     [3, 0],
//     [2, 0],
//     [1, 0],
//   ]);
//   let temp = map;

//   for (const item of [...input]) {
//     map.set(item, map.get(item) + 1);
//   }

//   for (let i = 0; i < 2; i++) {
//     for (const [k, v] of map) {
//       temp.has;
//     }
//   }
// };

const fishPop2 = () => {
  let map = Array(9).fill(0);

  for (const item of [...input]) {
    map[item] = map[item] + 1;
  }

  for (let i = 0; i < 256; i++) {
    const [z, o, t, th, f, fi, s, se, e] = map;
    map = [o, t, th, f, fi, s, se + z, e, z];
  }
  console.log(map.reduce((a, b) => b + a, 0));
};

fishPop2();
