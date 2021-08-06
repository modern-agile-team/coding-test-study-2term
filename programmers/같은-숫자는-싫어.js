function solution(arr) {
  return arr.filter((el, index) => el !== arr[index + 1]);
}
