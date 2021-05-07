function solution(absolutes, signs) {
  let answer = absolutes.reduce((acc, val, idx) => {
    return acc + (signs[idx] ? (val) : (-val));
  }, 0);
  return answer;
}