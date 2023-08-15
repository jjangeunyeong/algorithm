const filepath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const fs = require("fs");
const infix = fs.readFileSync(filepath).toString().trim();

const alpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let postfix = [];
let stack = [];

for (let i = 0; i < infix.length; i++) {
  cur = infix[i];
  if (alpha.includes(cur)) {
    postfix.push(cur);
  } else if (cur === "*" || cur === "/") {
    if (
      (stack.length > 0 && stack[stack.length - 1] === "*") ||
      stack[stack.length - 1] === "/"
    ) {
      postfix.push(stack.pop());
    }
    stack.push(cur);
  } else if (cur === "+" || cur === "-") {
    while (stack.length > 0 && stack[stack.length - 1] !== "(") {
      postfix.push(stack.pop());
    }
    stack.push(cur);
  } else if (cur === "(") {
    stack.push(cur);
  } else if (cur === ")") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      postfix.push(stack.pop());
    }
    stack.pop(); // ? 괄호 제거 '('
  }
}

console.log(postfix.concat(stack.reverse()).join(""));
