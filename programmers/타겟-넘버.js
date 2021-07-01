let cnt = 0;

function f(numbers, target, sum) {
  if (numbers.length === 0) {
    if (target === sum) cnt += 1;
    return;
  }
  f(numbers.slice(1), target, sum + numbers[0]);
  f(numbers.slice(1), target, sum - numbers[0]);
}

function solution(numbers, target) {
  f(numbers, target, 0);
  return cnt;
}
