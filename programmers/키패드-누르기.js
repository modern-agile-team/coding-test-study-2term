function getDistance(src, dst) {
  const numberCoordinate = {
    1: [0, 0], 2: [1, 0], 3: [2, 0],
    4: [0, 1], 5: [1, 1], 6: [2, 1],
    7: [0, 2], 8: [1, 2], 9: [2, 2],
    '*': [0, 3], 0: [1, 3], '#': [2, 3]
  };

  return Math.abs(numberCoordinate[src][0] - numberCoordinate[dst][0])
  + Math.abs(numberCoordinate[src][1] - numberCoordinate[dst][1]);
}

function solution(numbers, hand) {
  const handPosition = ['*', '#'];

  return numbers.map((number) => {
    if ([1, 4, 7].includes(number)) {
      handPosition[0] = number;
      return 'L';
    }

    if ([3, 6, 9].includes(number)) {
      handPosition[1] = number;
      return 'R';
    }

    const leftDistance = getDistance(handPosition[0], number);
    const rightDistance = getDistance(handPosition[1], number);

    if (leftDistance < rightDistance) {
      handPosition[0] = number;
      return 'L';
    }

    if (leftDistance > rightDistance) {
      handPosition[1] = number;
      return 'R';
    }
    
    handPosition[(hand === 'left') ? 0 : 1] = number;
    return hand === 'left' ? 'L' : 'R';
  }).join('');
}

console.log(solution([7, 0, 8, 2, 8], 'left'));
console.log(getDistance(2, 8));
console.log(getDistance(0, 8));