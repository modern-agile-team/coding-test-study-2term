function solution(n) {
  var answer = ("수박".repeat(n / 2)).concat((n % 2) ? "수" : "");
  return answer;
}