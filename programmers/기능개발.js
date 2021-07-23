function solution(progresses, speeds) {
  const result = [];
  let cnt = 0;

  while (progresses.length > 0) {
    progresses = progresses.map((el, idx) => el + speeds[idx]);
    if (progresses[0] >= 100) {
      result.push([]);
      cnt += 1;
    }

    while (progresses[0] >= 100) {
      result[cnt - 1].push(progresses[0]);
      progresses.shift();
      speeds.shift();
    }
  }
  return result.map((el) => el.length);
}
