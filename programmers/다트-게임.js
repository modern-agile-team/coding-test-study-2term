function solution(dartResultString) {
  let dartResults = dartResultString.split(/(\d+[SDT][*#]?)/).filter((val) => val !== '');
  let options = [];
  dartResults = dartResults.map((dartResult, index) => {
    const [ score, bonus, option ] = dartResult.match(/(\d+|[SDT]|[*#])/g);
    let bonusMultiplier = { S: 1, D: 2, T: 3 };
    let dartResultNum = Math.pow(parseInt(score), bonusMultiplier[bonus]);
    options[index] = [ option ];
    if (index > 0 && option === '*') options[index - 1].push(option);
    return dartResultNum;
  });
  dartResults = dartResults.map((dartResult, index) => {
    return options[index].reduce((acc, val) => {
      if (val === '*') return acc * 2;
      if (val === '#') return acc * -1;
      return acc;
    }, dartResult);
  });
  return dartResults.reduce((acc, dartResult) => acc + dartResult, 0);
}

console.log(solution('1D2S3T*'));