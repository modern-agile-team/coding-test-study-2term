function solution(dart) {
    
    let num = 0;
    let answer = [];
    let temp = 0;
    
    for(let i = 0; i < dart.length; i++) {
        if(dart[i] >= 0 && dart[i] <= 9) {
            if(dart[i] == 1 && dart[i+1] == 0) {        // 10점일 때
                temp = 10;
                i++;
            }
            else {
                temp = dart[i];
            }
        }
        if(dart[i] === 'S') {
            answer.push(temp);
        }
        if(dart[i] === 'D') {
            answer.push(temp ** 2);
        }
        if(dart[i] === 'T'){
            answer.push(temp ** 3);
        }
        if(dart[i] == '#') {
           answer[answer.length - 1] *= -1;
        }
        if(dart[i] == '*') {
            answer[answer.length - 1] *= 2;
            answer[answer.length - 2] *= 2;
        }
    }
    
    for(let i = 0; i < answer.length; i++) {
        num += Number(answer[i]);
    }
    
    return num;
}