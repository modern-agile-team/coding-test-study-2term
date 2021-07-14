function solution(brown, yellow) {
  const [multiply, sum] = [brown + yellow, (brown + 4) / 2]; // 각각 넓이 * 높이, 넓이 + 높이
  for (let i = 1; i <= multiply; i++) {
    for (let j = 1; j <= multiply; j++) {
      if (i * j === multiply && i + j === sum) return [j, i];
    }
  }
}
