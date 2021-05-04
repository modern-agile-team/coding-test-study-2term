function solution(arr) {
  arr = arr.filter((val) => { return val != Math.min(...arr) });
  if (arr.length === 0) return [-1];
  return arr;
}