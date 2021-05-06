function solution(n, arr1, arr2) {
  arr1 = arr1.map((binaryNum) => {
    let mapRow = [];
    for (let multiplier = Math.pow(2, n - 1); multiplier > 0; multiplier = Math.floor(multiplier / 2)) {
      mapRow.unshift(Math.floor(binaryNum / multiplier));
      binaryNum = (multiplier > binaryNum) ? binaryNum : binaryNum % multiplier;
    }
    return mapRow.reverse();
  });
  arr2 = arr2.map((binaryNum) => {
    let mapRow = [];
    for (let multiplier = Math.pow(2, n - 1); multiplier > 0; multiplier = Math.floor(multiplier / 2)) {
      mapRow.unshift(Math.floor(binaryNum / multiplier));
      binaryNum = (multiplier > binaryNum) ? binaryNum : binaryNum % multiplier;
    }
    return mapRow.reverse();
  });
  let arr3 = arr1.map((row, rowIndex) => {
    row = row.map((num, index) => !(num === 0 && arr2[rowIndex][index] === 0));
    return row;
  });
  return arr3.map((row) => {
    return row.map((isWall) => isWall ? '#' : ' ').join('');
  });
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

// let binaryNum = 9;
// let mapRow = [];
// for (let multiplier = 16; multiplier > 0; multiplier = Math.floor(multiplier / 2)) {
//   mapRow.unshift(Math.floor(binaryNum / multiplier));
//   binaryNum = (multiplier > binaryNum) ? binaryNum : binaryNum % multiplier;
// }
// console.log(mapRow);