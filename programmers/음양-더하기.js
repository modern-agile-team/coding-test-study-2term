function solution(absolutes, signs) {
  var answer = absolutes.reduce((acc, val, idx) => {
    return acc + (signs[idx] ? (val) : (-val));
  }, 0);
  return answer;
}