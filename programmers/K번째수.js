function solution(array, commands) {
  let answer = commands.map((val) => {
    let [i, j, k] = val;
    return array.slice(i - 1, j).sort((a, b) => { return a - b; })[k - 1];
  });
  return answer;
}