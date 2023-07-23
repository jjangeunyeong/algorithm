const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let graph = [...new Array(N + 1)].map(() => []);
const visited = [...new Array(N + 1).fill(false)];
let result = 0;

//그래프 생성
for (let i = 0; i < M; i++) {
  let [start, end] = input[i].split(" ").map(Number);

  // * 그래프에 정점을 넣는 과정에서 undefined 오류가 나서 왜지 했는데 graph 길이을 N으로 줘서였다.
  // ? 1부터 정점 N 까지의 배열을 사용할 것이기 때문에 필요한 배열은 N+1개!
  graph[start].push(end);
  graph[end].push(start);
}

for (let i = 1; i <= N; i++) {
  if (visited[i] === false) {
    dfs(i);
    result++;
  }
}

function dfs(v) {
  if (!visited[v]) {
    visited[v] = true;
  }

  for (let cur of graph[v]) {
    if (!visited[cur]) {
      dfs(cur);
    }
  }
}

console.log(result);
