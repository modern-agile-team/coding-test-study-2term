function solution(n, arr1, arr2) {
 
    let answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        let bin = (arr1[i] | arr2[i]).toString(2);
        
        if (bin.length < n) {
            let s = n - bin.length;
            let t = '';
            for (let k = 0; k < s; k++) {
                t += 0;
            }
            bin = t + bin;
        }
        
        let str = '';
        
        for (let k = 0; k < bin.length; k++) {
            str += (bin[k] === '1') ? '#' : ' ';
        }
        answer.push(str)
    }
    return answer
}
