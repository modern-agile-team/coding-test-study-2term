function solution(dartResult) {
    const squares = dartResult.match(/[SDT]/g);
    const parts = [];
    let indexPoint;
    let sum = 0;
    for(let i = 0; i < 3 ; i++) {
        indexPoint = dartResult.indexOf(squares[i]) // 기준점이 되는 SDT의 인덱스
        if ( i < 2) {   // 마지막 문자는 비교할 뒤의 인덱스가 존재하지 않기 때문에 나눠줌
            if (dartResult[indexPoint + 1] === "*" || dartResult[indexPoint + 1] === "#") {
                parts.push(dartResult.substring(0,indexPoint + 2));
                dartResult = dartResult.substring(indexPoint + 2, dartResult.length); //특수문자까지 포함해야 하므로 +2
            } else {
                parts.push(dartResult.substring(0,indexPoint+1));
                dartResult = dartResult.substring(indexPoint+1,dartResult.length); // 자신까지만 포함해야 하므로 +1
            }
        } else parts.push(dartResult.substring(0,dartResult.length));
    }          // 필수적으로 들어가는 SDT기준으로 뒤의 문자가 특수문자가 아니라면 그 인덱스 기준으로 잘라서 PART에 넣고 문자열을 재정의 하여 반복
    for (let j = 0; j < 3 ; j++) {
        let num = parseInt(parts[j]);
        if (squares[j] === "D") num = Math.pow(num,2);   // SDT기준으로 제곱해줌
        else if (squares[j] === "T") num = Math.pow(num,3);
        if (/\*/.test(parts[j])) {
            if (j >= 1) {
                parts[j - 1] *= 2;
                parts[j] = num * 2;
            }
            else parts[j] = num * 2;
        } else if (/\#/.test(parts[j])) parts[j] = -num;
        else parts[j] = num;                              // 특수문자에 따라 앞의 PART의 원소 숫자를 변화해줌
    }
    for (let h = 0; h < 3 ; h++) {
        sum += parts[h];
    }                     // PART의 원소들을 다 더해줌
    return sum;
}
const dartResult = "10S10S10S";
solution(dartResult);