const fs = require("fs");
const readFile = (path) => fs.readFileSync(path, { encoding: "utf8" });
const test = readFile("./t.txt").split("\n");
const input = readFile("./o.txt").split("\n");

const roundOne = (inp) => {
  let sum = 0;

  for (const item of inp) {
    const split = item.split(",");
    const arr1 = split[0].split("-");
    const arr2 = split[1].split("-");

    const [a1, a2] = [Number(arr1[0]), Number(arr1[1])];
    const [b1, b2] = [Number(arr2[0]), Number(arr2[1])];

    // console.log(a1, a2, b1, b2);
    if ((a1 <= b1 && a2 >= b2) || (b1 <= a1 && b2 >= a2)) {
      sum++;
    }
  }
  return sum;
};
// roundOne(input);

const createArray = (n1, n2) => {
  const arr = [];
  for (let i = n1; i <= n2; i++) {
    arr.push(i);
  }
  return arr;
};

const roundTwo = (inp) => {
  let sum = 0;

  for (const item of inp) {
    const split = item.split(",");
    const arr1 = split[0].split("-");
    const arr2 = split[1].split("-");

    const [a1, a2] = [Number(arr1[0]), Number(arr1[1])];
    const [b1, b2] = [Number(arr2[0]), Number(arr2[1])];

    const m1 = createArray(a1, a2);
    const m2 = createArray(b1, b2);

    for (const item of m1) {
      if (m2.includes(item)) {
        sum++;
        break;
      }
    }
  }
  console.log(sum);
  return sum;
};
roundTwo(input);

/**
 * getting exactly one item
 * 51 = 5
 * 90 = 9
 * string[exact index] doesn't account for double digits
 */
// for (const item of input) {
//   const [a1, a2] = [Number(item[0]), Number(item[2])];
//   const [b1, b2] = [Number(item[4]), Number(item[6])];
//   if ((a1 <= b1 && a2 >= b2) || (b1 <= a1 && b2 >= a2)) {
//     sum++;
//   }
// }
/**
 * 25-80,24-26
 * 26-82,25-25
 * 44-95,43-94
 *
 * if 24 >= 25 && 26 <= 80 C
 * ei 24 <= 25 && 26 >= 80
 *
 * 25 >= 26 && 25 <= 82 C
 * 25 <= 26 && 25 >= 82
 *
 *
 */
