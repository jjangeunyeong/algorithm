/* 
! 오름차순이여서 그냥 sort()를 사용했는데 계속 틀렸다고 나왔다.
? 숫자 정렬시, sort((a,b)=>a-b)로 해줘야함.
*/

const fs = require("fs");
const [n, ...arr] = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(n);
let graph = arr.map((row) => row.split("").map(Number));
const visited = Array.from(Array(N), () => Array(N).fill(false));
let home = 0;
let village = 0;
let result = [];

const dirX = [0, 0, -1, 1]; //상 하 좌 우
const dirY = [1, -1, 0, 0]; //상 하 좌 우

function dfs(x, y) {
  if (graph[x][y] === 1 && visited[x][y] === false) {
    visited[x][y] = true;
    home++;

    for (let i = 0; i < 4; i++) {
      const [newX, newY] = [x + dirX[i], y + dirY[i]];
      if (newX >= 0 && newX < N && newY >= 0 && newY < N) {
        dfs(newX, newY);
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1 && visited[i][j] === false) {
      dfs(i, j);
      village++;
      result.push(home);
      home = 0;
    }
  }
}

console.log(village + "\n" + result.sort((a, b) => a - b).join("\n"));
