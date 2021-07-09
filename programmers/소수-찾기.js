const numbers = '011';

function solution(numbers) {
  const numsArr = numbers.split('').sort((a, b) => b - a);
  const max = numsArr.join('');
  const arr = primeNum(max);
  let answer = 0;

  function primeNum(max) {
    const arr = [];

    for (let i = 2; i <= max; i += 1) {
      if (arr[i] === 0) continue;

      for (let j = i + i; j <= max; j += i) {
        arr[j] = 0;
      }
    }
    return arr;
  }

  for (let i = 2; i <= max; i += 1) {
    if (arr[i] === 0) continue;
    let temp = i.toString().split('');
    
    for (let cnt of numsArr) {
      let idx = temp.indexOf(cnt);
      if (idx > -1) temp.splice(idx, 1);
    }
    if (temp.length === 0) answer++;
  }
  return answer;
}

console.log(solution(numbers));

