const filepath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const fs = require("fs");
const input = fs.readFileSync(filepath).toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);
const number = input[1].split("").map(Number);

let stack = [];
let cnt = K; //지워야 하는 숫자의 개수

for (let i = 0; i < N; i++) {
  while (cnt > 0 && stack[stack.length - 1] < number[i]) {
    stack.pop();
    cnt--;
  }
  stack.push(number[i]);
}

while (cnt > 0) {
  stack.pop();
  cnt--;
}

console.log(stack.join(""));
