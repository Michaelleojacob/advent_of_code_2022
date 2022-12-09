const fs = require("fs");
const readFile = (path) => fs.readFileSync(path, { encoding: "utf8" });
const test = readFile("./t.txt").split("\n");
const input = readFile("./o.txt").split("\n");
