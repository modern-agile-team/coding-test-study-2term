function solution(d, budget) {
  d.sort((a, b) => a - b);
  return d.reduce((acc, val) => {
    if (budget >= val) {
      budget -= val;
      return acc + 1;
    }
    return acc;
  }, 0);
}