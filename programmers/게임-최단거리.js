function solution(maps) {
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]; // 동 서 남 북
  const row = maps.length;
  const col = maps[0].length;

  const queue = [[0, 0]];

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = y + direction[i][0];
      const nx = x + direction[i][1];

      if (ny >= 0 && ny < row && nx >= 0 && nx < col) {
        if (maps[ny][nx] === 1) {
          maps[ny][nx] = maps[y][x] + 1;
          queue.push([ny, nx]);
        }
      }
    }
  }
  return maps[row - 1][col - 1] === 1 ? -1 : maps[row - 1][col - 1];
}
