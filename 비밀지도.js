function solution(n, arr1, arr2) {
    const bins = [];
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        bins.push((arr1[i] | arr2[i]).toString(2));
    }
    
    for (let bin of bins) {
        if (bin.length !== n) answer.push(' ' + bin.replace(/1/g, '#').replace(/0/g, ' '));
        else answer.push(bin.replace(/1/g, '#').replace(/0/g, ' '));
    }
    
    return answer;
}
