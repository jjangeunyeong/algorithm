function dfs(graph, v, visited) {
  visited[v] = true; // ? 탐색 식작 노드 방문 처리
  console.log(v);

  // ? 탐색 노드의 인접 노드 확인
  for (let cur of graph[v]) {
    if (!visited[cur]) {
      dfs(graph, cur, visited);
    }
  }
}

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

let visited = [...Array(9).fill(false)];

dfs(graph, 1, visited);

/*
1
2
7
6
8
3
4
5
*/
