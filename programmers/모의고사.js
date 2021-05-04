function solution(answers) {
  let guessPatterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  let guessAnswers = guessPatterns.map((val) => {
    return [...new Array(Math.floor(answers.length / val.length)).fill(val).flat(), ...val.slice(0, answers.length % val.length)];
  });
  let scores = guessAnswers.map((guessAnswer) => {
    return guessAnswer.reduce((acc, val, idx) => acc + ((val === answers[idx]) ? 1 : 0), 0);
  });
  return scores.flatMap((val, idx) => (val === Math.max(...scores) ? [idx + 1] : []));
}

console.log(solution([1, 2, 3, 4, 5]));