const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => Number(e));

let result = [];

arr.map((e) => {
  if (e === 0) {
    result.pop();
  } else result.push(Number(e));
});

const resultSum = result.reduce((acc, cur) => acc + cur, 0);
console.log(resultSum);
