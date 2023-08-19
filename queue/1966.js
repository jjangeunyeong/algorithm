const filepath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const fs = require("fs");
const [n, ...testCase] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const result = [];

for (let i = 0; i < testCase.length; i += 2) {
  let [N, M] = testCase[i].trim().split(" ").map(Number);
  let arr = testCase[i + 1].trim().split(" ").map(Number);
  const q = [];
  let order = 1;

  for (let j = 0; j < N; j++) {
    q.push([j, arr[j]]); //? index, value
  }

  while (order <= N) {
    if (Math.max(...arr) === arr[0]) {
      if (q[0][0] === M) {
        result.push(order);
        break;
      } else {
        arr.shift();
        q.shift();
        order++;
      }
    } else {
      //해당원소가 제일 크지 않을 때
      q.push(q.shift());
      arr.push(arr.shift());
    }
  }
}

console.log(result.join("\n"));
