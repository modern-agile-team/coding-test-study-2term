function combine(splitedNums, N) {
    let result = [];
    if (N === 1) return splitedNums.map((v) => [v]);
  
    splitedNums.forEach((v, idx, splitedNums) => {
      const fixer = v;
      const rests = splitedNums.filter((_, index) => index !== idx);
      const permuationArr = combine(rests, N - 1);
      const combineFixer = permuationArr.map((v) => [fixer, ...v]);
      result.push(...combineFixer);
    });
    return result;
}
  
function analysis(num) {
    if (num === 1 || num === 0) return false;
    if (num === 2) return true;
    for (let i=2; i < Math.sqrt(num) + 1; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
  
function solution(numbers) {
    let answer = 0;
    const splitedNums = numbers.split('');
    const seen = [];
    
    for (let i = 1; i <= numbers.length; i++) {
        const result = combine(splitedNums, i).map(v => Number(v.join('')));
        result.forEach(x => {
            if (!seen.includes(x)) {
                seen.push(x);
                answer += analysis(x) ? 1 : 0;
            }
        });
    }
    return answer;
}


