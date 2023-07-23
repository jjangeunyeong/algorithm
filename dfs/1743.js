const fs = require("fs");
const [[N, M, K], ...input] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const graph = Array.from(Array(N), () => Array(M).fill("."));
input.forEach(([r, c]) => (graph[r - 1][c - 1] = "#"));
const dir = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];
let trashSize = 0;
let trashCan = [];

const dfs = (y, x) => {
  trashSize++;
  graph[y][x] = ".";
  dir.forEach(([dy, dx]) => {
    const newY = y + dy;
    const newX = x + dx;
    if (
      newX >= 0 &&
      newX < M &&
      newY >= 0 &&
      newY < N &&
      graph[newY][newX] === "#"
    ) {
      dfs(newY, newX);
    }
  });
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] === "#") {
      dfs(i, j);
      trashCan.push(trashSize);
      trashSize = 0;
    }
  }
}

console.log(Math.max(...trashCan));
