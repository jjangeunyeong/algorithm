// 올바른 괄호

function solution(s) {
  s = s.split("");
  let stack = [];

  stack.push(s.shift()); //s[0]미리 넣어주기

  while (s.length > 0) {
    const cur = s.shift();
    if (s)
      if (cur === "(") {
        if (stack[stack.length - 1] === ")") {
          return false;
        }
        stack.push(cur);
      } else if (cur === ")") {
        if (stack.length <= 0) return false;
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          return false;
        }
      }
  }
  return stack.length > 0 ? false : true;
}

console.log(solution(")()("));

/*
solution1 : 스택에 문자를 넣고 빼는 방법(시간초과)
? solution 2:
'(' 문자일 때는 tmp에 1을 더하고
')' 문자일 때는 tmp에 1을 빼준다.
*/

function solution2(s) {
  let tmp = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? tmp++ : tmp--;
    if (tmp < 0) return false;
  }

  return tmp === 0 ? true : false;
}

console.log(solution2(")()("));

function solution2_2(s) {
  let tmp = 0;
  for (const char of s) {
    char === "(" ? tmp++ : tmp--;
    if (tmp < 0) return false;
  }

  return tmp === 0 ? true : false;
}

console.log(solution2_2(")()("));

/*
for문으로 돌릴때는 시간초과인데
for of로 돌리면 통과네
*/
