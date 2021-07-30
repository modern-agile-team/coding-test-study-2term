function solution(priorities, location) {
  priorities = priorities.map((value) => [value, false]);
  priorities[location][1] = true;

  let step = 0;
  while (priorities.length > 0) {
    if (priorities.every((value) => value[0] <= priorities[0][0])) {
      step += 1;
      if (priorities[0][1]) return step;
      priorities.shift();
    } else priorities.push(priorities.shift());
  }
}

console.log(solution([2, 1, 3, 2], 2));
