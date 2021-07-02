function solution(n) {
  const answer = [];

  const hanoi = (num, from, wayPoint, to) => {
    if (num === 1) {
      answer.push([from, to]);
      return;
    }
    hanoi(num - 1, from, to, wayPoint);
    answer.push([from, to]);
    hanoi(num - 1, wayPoint, from, to);
    return answer;
  };
  return hanoi(n, 1, 2, 3);
}
