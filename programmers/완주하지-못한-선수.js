function solution(participant, completion) {
  let obj = {};
  participant.forEach((val) => {
    if (val in obj) { obj[val] += 1; }
    else { obj[val] = 1; }
  });
  completion.forEach((val) => {
    obj[val] -= 1;
  });
  return Object.keys(obj).find((key) => {
    return obj[key] === 1;
  });
}