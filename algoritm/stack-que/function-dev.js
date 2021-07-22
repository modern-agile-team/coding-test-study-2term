function solution(prog, speeds) {
  const result = [];
  let term = 0;
  while (prog.length > 0) {
    prog = prog.map((el, index) => el + speeds[index]);
    if (prog[0] >= 100) {
      result.push([]);
      term += 1;
    }
    while (prog[0] >= 100) {
      result[term - 1].push(prog[0]);
      prog.shift();
      speeds.shift();
    }
  }
  return result.map((el) => el.length);
}
