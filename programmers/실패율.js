function solution(N, stages) {
  const challengingStageNumbers = Array.from(new Array(N + 1), (_, k) => k + 1).map((stageNumber) => {
    return stages.filter((stage) => stage === stageNumber).length;
  });

  const failureRatios = challengingStageNumbers.map((challengingStageNumber, index) => {
    const challengeStageNumber = challengingStageNumbers.slice(index).reduce((acc, challengeNum) => acc + challengeNum, 0);
    return challengingStageNumber / challengeStageNumber;
  }).slice(0, -1);

  const failureRatioRank = failureRatios.map((failureRatio, index) => [index + 1, failureRatio])
  .sort((a, b) => b[1] - a[1]).map((val) => val[0]);
  
  return failureRatioRank;
}