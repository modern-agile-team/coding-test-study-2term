function solution(numbers) {
    const number = numbers.split('').sort((a, b) => b - a);  
    const max = Number(number.join('')); 
    const sosuNum = sosu(max);
    let answer = 0;  
    
    for (let i = 2; i <= max; i++) { 
        if (sosuNum[i] === false) continue; 
        let temp = i.toString().split('');
        
        for (let el of number) { 
            let idx = temp.indexOf(el); 
            if (idx > -1) temp.splice(idx, 1); 
        }
        if(temp.length === 0) answer++ 
    } 
    return answer; 
}  

function sosu(N) { 
    const arr = []; 
    for (let i = 2; i <= N; i++) { 
        if (arr[i] === false) continue
        for (let k = i + i; k <= N ; k += i) { 
            arr[k] = false; 
            } 
    } 
    return arr; 
}

