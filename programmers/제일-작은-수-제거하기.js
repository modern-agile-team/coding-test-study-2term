function solution(arr) {
  arr = arr.filter((val) => val != Math.min(...arr));
  if (arr.length === 0) return [-1];
  return arr;
}