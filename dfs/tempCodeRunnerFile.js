const dfs = (y, x) => {
  for (let i = 0; i < 4; i++) {
    const newY = y + dir[i][1];
    const newX = x + dir[i][0];

    if (
      newX >= 0 &&
      newX < M &&
      newY >= 0 &&
      newY < N &&
      graph[newY][newX] === "#"
    ) {
      trashSize++;
      dfs(newY, newX);
    }
  }
};