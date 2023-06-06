function dfs(graph, v, visited) {
  visited[v] = true;
  console.log(v);

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
