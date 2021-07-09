function solution(numbers) {
  const result = [];
  const eachNum = numbers.split("");
  const set = new Set();

  permutation(eachNum, "");

  // 경우의 수 찾기
  function permutation(arr, str) {
    if (arr.length) {
      for (let i = 0; i < arr.length; i++) {
        const copy = [...arr];
        copy.splice(i, 1);
        permutation(copy, str + arr[i]);
      }
    }
    if (str > 0) set.add(Number(str));
  }

  const primeNum = Array.from(set);

  // 소수 찾기
  for (let i = 0; i < primeNum.length; i++) {
    for (let j = 2; j < primeNum[i]; j++) {
      if (primeNum[i] % j === 0) break;
      if (j + 1 === primeNum[i] && primeNum[i] % j) {
        result.push(primeNum[i]);
      }
    }
    if (primeNum[i] === 2) result.push(2);
  }

  // 결과 return
  return result.length;
}
