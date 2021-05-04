function solution(a, b) {
  if (a > b) [a, b] = [b, a];
  var answer = 0;
  for (let i = a; i <= b; i++) {
    answer += i;
  }
  // javascript에 range(a,b) 함수를 못찾아서...
  return answer;
}