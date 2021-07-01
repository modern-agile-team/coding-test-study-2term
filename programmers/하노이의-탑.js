const arr = [];

function f(src, dst, n) {
  if (n === 1) {
    arr.push([src, dst]);
    return;
  }
  f(src, 6 - (src + dst), n - 1);
  arr.push([src, dst]);
  f(6 - (src + dst), dst, n - 1);
}

function solution(n) {
  f(1, 3, n);
  return arr;
}
