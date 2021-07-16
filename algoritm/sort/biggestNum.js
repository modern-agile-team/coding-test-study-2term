function solution(numbers) {
  const result = numbers
    .map((number) => number.toString()) // 문자열로 치환
    .sort((a, b) => b + a - (a + b)) // 두 문자열을 더한 값을 비교
    .join("");
  return parseInt(result) === 0 ? "0" : result; // '0000'은 '0'으로 return
}
