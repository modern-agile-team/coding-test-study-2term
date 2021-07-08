const possibleNumbers = new Set();

function findPossibleNumber(arr, number) {
  if (number.length) possibleNumbers.add(parseInt(number, 10));
  arr.forEach((value, index) => {
    findPossibleNumber(
      arr.filter((_, idx) => index !== idx),
      `${number}${value}`
    );
  });
}

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (!(number % i)) return false;
  }
  return true;
}

function solution(numbers) {
  const arr = numbers.split("");
  findPossibleNumber(arr, "");
  return [...possibleNumbers].filter((possibleNumber) =>
    isPrime(possibleNumber)
  ).length;
}
