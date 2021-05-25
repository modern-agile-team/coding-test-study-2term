function solution(dartResult) {
    const answer = [];
    let splitResult = dartResult.match(/\d{1,2}[SDT]{1}[*|#]?/g );
    let num = 0;
    let bonus = 0;
    let option = 0;
    
    for (let i = 0; i < 3; i++) {
        num = splitResult[i].match(/\d{1,2}/g);
        bonus = splitResult[i].match(/[SDT]{1}/g);
        option = splitResult[i].match(/[*|#]/g);
        
        if (bonus == "S")  num = parseInt(num);
        if (bonus == "D")  num **= 2;
        if (bonus == "T")  num **= 3;
        
        if (option == "*") {
            num *= 2; 
            if(i != 0) { answer[i - 1] = answer[i - 1] * 2 }; 
        }
        else if (option == "#") num = num * (- 1);
        
        answer.push(num);
    }
    return answer.reduce((a, b) => a + b);
}
