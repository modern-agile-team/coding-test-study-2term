function solution(lottos, win_nums) {
  let answer = lottos.reduce((acc, val) => {
    return acc + win_nums.includes(val);
  }, 0);
  let zeros = lottos.filter((val) => val === 0).length;
  let min = 7 - answer;
  let max = 7 - answer - zeros;
  return [(max > 6) ? 6 : max, (min > 6) ? 6 : min];
}