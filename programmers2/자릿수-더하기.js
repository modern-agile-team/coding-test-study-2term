function solution(n) {
    const N= (n + "")
    let sum = 0;
    for (let i = 0; i<N.length; i++) {
        sum += parseInt(N[i]);
    }
    return sum ;
    
}
