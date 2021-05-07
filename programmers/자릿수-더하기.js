function solution(n) {
    
    const strNum = String(n)    
    let sumNum = 0;
    
    for (let i = 0; i < strNum.length; i++) {
        sumNum += parseInt(strNum[i]);
    }
    return sumNum;
    
}
