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
function merge(a, b) {
  let arr = [];
  while (a.length && b.length) {
    if (compareNumbers(a[0], b[0])) {
      arr.push(b.shift());
    } else {
      arr.push(a.shift())
    }
  }
  arr = [...arr, ...a, ...b];
  return arr;
}
function divide(arr) {
  if (arr.length < 2) return arr;
  const left = divide(arr.slice(0, Math.floor(arr.length / 2)));
  const right = divide(arr.slice(Math.floor(arr.length / 2)));
  return merge(left, right);
}

function solution(numbers) {
  // numbers.sort((a, b) => (compareNumbers(a, b) ? 1 : -1));
  numbers = divide(numbers);
  if (numbers.every((value) => value === 0)) {
    return '0';
  }
  return numbers.join('');
}

console.log(solution([303,30]))
