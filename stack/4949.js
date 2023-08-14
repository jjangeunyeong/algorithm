const filepath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const fs = require("fs");
const input = fs.readFileSync(filepath).toString().trim().split("\n");

function solution1() {
  return input.map((e) => {
    const stack = [];
    let result = "yes";
    if (e === ".") return;
    for (i = 0; i < e.length; i++) {
      if (e[i] === "(" || e[i] === "[") {
        stack.push(e[i]);
      } else if (e[i] === ")") {
        if (stack.pop() !== "(") {
          result = "no";
          break;
        }
      } else if (e[i] === "]") {
        if (stack.pop() !== "[") {
          result = "no";
          break;
        }
      }
    }
    return stack.length > 0 || result === "no" ? "no" : "yes";
  });
}

console.log(solution1().join("\n"));

// ! stack에 괄호가 남아있는 경우 no!!
