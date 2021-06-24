function solution(maps) {
  const queue = [[0, 0]];
  const costs = maps.map((val) => val.map(() => 0));

  const rowLen = maps.length;
  const colLen = maps[0].length;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    const cost = costs[y][x];

    if (x === colLen - 1 && y === rowLen - 1)
      return cost + 1;

    [[1, 0], [0, 1], [-1, 0], [0, -1]].forEach(([opX, opY]) => {
      const [nx, ny] = [x + opX, y + opY];
      if (nx >= 0 && ny >= 0 && nx < colLen && ny < rowLen) {
        if (maps[ny][nx] === 1 && costs[ny][nx] === 0) {
          queue.push([nx, ny]);
          costs[ny][nx] = cost + 1;
        }
      }
    });
  }
  return -1;
}


solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);
