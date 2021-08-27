function solution(a, b) {
  return a.map((el, index) => el * b[index]).reduce((i, j) => i + j);
}
