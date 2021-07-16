function solution(citations) {
  const n = citations.length;
  let result = 0;

  //   citations.sort();        메서드
  //   bubbleSort(citations);   버블정렬 사용자 정의 함수

  for (let h = 0; h < citations[n - 1]; h++) {
    if (
      citations.filter((el) => el >= h).length >= h &&
      citations.filter((el) => el < h).length <= h
    ) {
      result = h;
    } else break;
  }
  return result;
}

function bubbleSort(numbers) {
  const n = numbers.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      if (numbers[j + 1] < numbers[j]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }
}
