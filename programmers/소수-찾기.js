function solution(numbers) {
    const numArr = numbers.split('').sort((a, b) => b - a);
    const numMax = numArr.join('');
    const arr = primeNum(numMax);
    let answer = 0;
     
    function primeNum(numMax) {
        const arr = [];
        for (let i = 2; i <= numMax; i++) {
            if (arr[i] === 0) continue;
            for (let j = i + i; j <= numMax; j += i) {
                arr[j] = 0;
            }
        }
        return arr;
    }
    
    for (let i = 2; i <= numMax; i++) {
        if (arr[i] === 0) continue;
        let temp = i.toString().split('');
        for (let cnt of numArr) {
            let idx = temp.indexOf(cnt);
            if (idx > -1) temp.splice(idx, 1);
        }
        if (temp.length === 0) answer++;
    }
    return answer;
}