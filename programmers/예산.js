function solution(d, budget) {
    
    const sortedPrice = d.sort((a, b) => a - b);
    let dSum = 0;
    let result = 0;
    
    for (let i = 0; i < sortedPrice.length; i++) {
        
        if ((dSum + sortedPrice[i]) > budget) break;
        else {
            dSum += sortedPrice[i];
            result += 1;
        }
    }
    return result;
}
