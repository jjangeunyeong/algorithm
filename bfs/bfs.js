let graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

const bfs = (graph, start) => {
  let needVisit = []; //? 탐색해야할 노드들
  needVisit.push(start); //? 탐색 시작
  visited[start] = true;

  while (needVisit.length !== 0) {
    const v = needVisit.shift(); //? needVisit은 queue이며 선입선출을 위해 shift() 사용
    console.log(v);

    for (const cur of graph[v]) {
      //2,3,8
      if (!visited[cur]) {
        needVisit.push(cur);
        visited[cur] = true;
      }
    }
  }
};

let visited = [...Array(9).fill(false)];

bfs(graph, 1, visited);
