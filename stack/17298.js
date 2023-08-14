const fs = require("fs");
const [n, arr] = fs.readFileSync("test.txt").toString().trim().split("\n");
const N = Number(n);
const input = arr.split(" ").map((e) => Number(e));

function solution1() {
  const result = input.map((e, idx) => {
    let bigger = -1;
    for (let i = idx + 1; i < input.length; i++) {
      if (e < input[i]) {
        bigger = input[i];
        break;
      }
    }
    return bigger;
  });

  console.log(result.join(" "));
}

//solution1();
// 시간초과
// ? N최대크기 = 1,000,000

function solution2() {
  let stack = [];
  let result = Array(N).fill(-1);

  input.map((e, i) => {
    while (stack.length !== 0 && input[stack[stack.length - 1]] < e) {
      result[stack.pop()] = e;
    }
    stack.push(i);
  });

  console.log(result.join(" "));
}
solution2();
