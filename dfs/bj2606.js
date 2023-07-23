const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]); //컴퓨터의 수
const pair = Number(input[1]); //컴퓨터 쌍의 수
let visited = [...new Array(N + 1)].fill(false);
let graph = [...new Array(N + 1)].map(() => []);
let result = 0;

for (let i = 0; i < pair; i++) {
  let start = Number(input[i + 2].split(" ")[0]);
  let end = Number(input[i + 2].split(" ")[1]);
  graph[start].push(end);
  graph[end].push(start);
}

function dfs(v) {
  visited[v] = true;

  for (let cur of graph[v]) {
    if (!visited[cur]) {
      result++;
      dfs(cur);
    }
  }
}

dfs(1);
console.log(result);
