function solution(bridgeLength, weight, truckWeights) {
  const numberOfTrucks = truckWeights.length;
  const waitingTrucks = truckWeights;
  const passingTrucks = Array(bridgeLength).fill(undefined);
  const passedTrucks = [];
  let time;
  for (time = 1; passedTrucks.length < numberOfTrucks; time += 1) {
    // passingTrucks first element를 passedTrucks으로 옮기기
    if (passingTrucks[0]) passedTrucks.push(passingTrucks[0]);
    // passingTrucks 한칸씩 옮기기
    for (let i = 1; i < bridgeLength; i += 1) {
      passingTrucks[i - 1] = passingTrucks[i];
    }
    passingTrucks[bridgeLength - 1] = undefined;
    // waitingTrucks first element를 passingTrucks으로 옮기기
    const sumOfPassingTrucks =
      passingTrucks.reduce((acc, val) => acc + (val || 0), 0) +
      waitingTrucks[0];
    if (sumOfPassingTrucks <= weight)
      passingTrucks[bridgeLength - 1] = waitingTrucks.shift();
  }
  return time - 1;
}

console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
