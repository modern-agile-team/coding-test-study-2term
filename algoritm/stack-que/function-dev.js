function solution(prog, speeds) {
  let result = [];
  let i = 0;
  while (prog.length > 0) {
    prog = prog.map((el, index) => el + speeds[index]);
    if (prog[0] >= 100) {
      result.push([]);
      i += 1;
    }
    while (prog[0] >= 100) {
      result[i - 1].push(prog[0]);
      prog.shift();
    }
  }
  return result.map((el) => el.length);
}
