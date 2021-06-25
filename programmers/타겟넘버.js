function solution(numbers, target) {
  let answer = 0;
  function DFS(count, sum) {
    if (count === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }
    DFS(count + 1, sum + numbers[count]);
    DFS(count + 1, sum - numbers[count]);
  }
  DFS(0, 0);
  return answer;
}
