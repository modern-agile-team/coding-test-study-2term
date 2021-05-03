function solution(s) {
  var answer = (s.length % 2) ? s[Math.floor(s.length / 2)] : s.substr(Math.floor(s.length / 2) - 1, 2)
  return answer;
}