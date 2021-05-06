function solution(n){
    const nChangedStr = String(n);
    const nLineMeasure = nChangedStr.length;
    let sum = 0;
    for (let i = 0 ; i < nLineMeasure ; i++ ){
        sum += Number(nChangedStr[i]);
    }
    return console.log(sum);
}
let n = 987;
solution(n);