function solution(n) {
  var answer = 0;
  for (; n > 0; n = Math.floor(n / 10)) {
    answer += n % 10;
  }
  return answer;
}