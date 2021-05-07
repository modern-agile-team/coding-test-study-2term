function solution(participant, completion) {
    let answer = {};
    for (let i of participant) {
    if (!answer[i]) {
      answer[i] = 1;
    } else answer[i] += 1;
  }
  for (let j of completion) {
    if (answer[j]) {
      answer[j] -= 1;
    }
  }
  for (let k of participant) {
    if (answer[k] >= 1) {
      answer = k;
    }
  }
  return answer;
}