function compareNumbers(a, b) {
  [a, b] = [a.toString(), b.toString()];
  for (let i = 0; i < a.length && i < b.length; i += 1) {
    if (Number(a[i]) !== Number(b[i]))
      return Number(a[i]) < Number(b[i]);
  }
  return Number(`${a}${b}`) < Number(`${b}${a}`);
}

function bubble(arr) {
  for (let i = 0; i < arr.length; i += 1)
    for (let j = 0; j < arr.length - i - 1; j += 1)
      if (compareNumbers(arr[j], arr[j + 1]))
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
}

function solution(numbers) {
  numbers.sort((a, b) => (compareNumbers(a, b) ? 1 : -1));
  if (numbers.every((value) => value === 0)) {
    return '0';
  }
  return numbers.join('');
}

console.log(solution([303,30]))
