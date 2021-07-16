function solution(numbers) {
  let result = numbers.map((number) => number.toString());
  bubbleSort(result);
  result = result.filter((el) => el !== undefined).join("");
  return parseInt(result) === 0 ? "0" : result;
}

function bubbleSort(numArr) {
  const n = numArr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      if (numArr[j + 1] + numArr[j] > numArr[j] + numArr[j + 1]) {
        [numArr[j], numArr[j + 1]] = [numArr[j + 1], numArr[j]];
      }
    }
  }
}
