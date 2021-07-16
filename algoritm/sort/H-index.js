function solution(citations) {
  const n = citations.length;
  let result = 0;

  //   citations.sort();        메서드
  //   bubbleSort(citations);   버블소트 사용자 정의 함수

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

function bubbleSort(numArr) {
  const n = numArr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      if (numArr[j + 1] < numArr[j]) {
        [numArr[j], numArr[j + 1]] = [numArr[j + 1], numArr[j]];
      }
    }
  }
}
