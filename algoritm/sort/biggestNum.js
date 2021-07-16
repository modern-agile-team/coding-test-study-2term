function solution(numbers) {
  let result = numbers.map((number) => number.toString());
  bubbleSort(result);
  result = result.filter((el) => el !== undefined).join("");

  return parseInt(result) === 0 ? "0" : result;
}

function bubbleSort(numbers) {
  const n = numbers.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      if (numbers[j + 1] + numbers[j] > numbers[j] + numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }
}
