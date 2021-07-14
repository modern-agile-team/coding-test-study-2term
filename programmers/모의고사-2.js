function solution(answers) {
  const [answerFirst, answerSecond, answerThird] = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const result = [];
  let cnts = [0, 0, 0];

  answers.forEach((el, idx) => {
    if (el === answerFirst[idx % answerFirst.length]) cnts[0]++;
    if (el === answerSecond[idx % answerSecond.length]) cnts[1]++;
    if (el === answerThird[idx % answerThird.length]) cnts[2]++;
  });

  const max = Math.max(...cnts);

  cnts.forEach((el, idx) => {
    if (el === max) result.push(idx + 1);
  });

  return result.sort((a, b) => a - b);
}

