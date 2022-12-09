const fs = require("fs");
const readFile = (path) => fs.readFileSync(path, { encoding: "utf8" });
const realData = readFile("./o.txt").split("\n");

// console.log(testData);

class ListNode {
  constructor({ prev = null, data = null }) {
    this.prev = prev;
    this.data = data;
    this.dirSum = 0;
    this.files = [];
    this.childDir = [];
  }
}

const root = new ListNode({ data: "/" });
let curr = root;

const addToPrevious = (currNode, num) => {
  let temp = currNode;
  while (temp.prev) {
    temp = temp.prev;
    temp.dirSum += num;
  }
};

for (let i of realData) {
  si = i.split(" ");
  // console.log("----------------------------------");
  // console.log(si);
  switch (true) {
    case si.length === 2:
      let [f, s] = si;
      if (s === "ls");
      else if (f === "dir") {
        // if making a new directory
        curr[s] = new ListNode({ data: s, prev: curr });
        curr.childDir.push(s);
      } else {
        // else f,s  -> number, filename
        curr.dirSum += Number(f);
        addToPrevious(curr, Number(f));
        curr.files.push(s);
      }

      break;
    case si.length === 3:
      const c = si[2];
      // if current is root
      if (curr.data === c) break;
      // if current is .. go up a directory
      else if (c === "..") curr = curr.prev;
      else {
        // else go to next
        // ex: $ cd 'auth/'
        curr = curr[c];
      }

      break;
    default:
      break;
  }
  // console.log(curr);
}

// console.log(root);

const dfs = (node, s = 0) => {
  if (!node) return 0;

  const { childDir, dirSum } = node;

  if (Number(dirSum) < 100000) s += Number(dirSum);

  childDir.forEach((item) => {
    return (s += dfs(node[item]));
  });
  return s;
};

// console.log(dfs(root));

let target = 4274301;
let resArr = [];

const dfs2 = (node) => {
  if (!node) return;

  const { childDir, dirSum } = node;

  if (Number(dirSum) > Number(target)) resArr.push(dirSum);
  childDir.forEach((item) => {
    return dfs2(node[item]);
  });
};

dfs2(root);

console.log(resArr);

console.log(Math.min(...resArr));

/**
 * max 70,000,000
 * need 30,000,000
 *
 * 70,000,000 - 30,000,000 = 50m
 *
 * curr 44,274,331
 *
 * 70,000,000 - 44,274,331 =  25,725,699
 * Unused current space 25,725,669
 *
 * delete over 4,274,301
 */

// class Test {
//   constructor(val = null, next = null, ref = null) {
//     this.val = val;
//     this.next = next;
//     this.ref = ref;
//   }
// }

// const t = new Test(1, 2, 3);
// // console.log(t);
// t["a"] = new Test(4, 5, 6);
// // console.log(t);

// let curr = t;

// curr = t.a;
// console.log(curr);
