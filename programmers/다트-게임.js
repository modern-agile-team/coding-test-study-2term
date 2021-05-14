function solution(dartResult) {
    let num = 0;
    const answer = [];
    let temp = 0;
    

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
                temp = 10;
                i++;
            }
            else {
                temp = dartResult[i];
            }
        }
        else if(dartResult[i] === 'S') {
            answer.push(temp);
        }
        else if(dartResult[i] === 'D') {
            answer.push(Math.pow(temp, 2));
        }
        else if(dartResult[i] === 'T'){
            answer.push(Math.pow(temp, 3));
        }
        else if(dartResult[i] == '#') {
           answer[answer.length - 1] *= -1;
        }
        else if(dartResult[i] == '*') {
            answer[answer.length - 1] *= 2;
            answer[answer.length - 2] *= 2;
        }
    }
    for (let i = 0; i < answer.length; i++) {
        num += Number(answer[i]);
    }
    return num;
    
    
    /*
     (1) for문을 이용해 dartResult의 길이만큼 각 character를 검사하도록 한다.

     (2) 검사하려는 character가 0~9 사이의 숫자일 경우 다음 숫자가 0인지 한번 더 검사한다(10인지 확인하기 위해서)

     (3) 10인 경우 temp에 10을 저장한 뒤 i를 높여준다(0 부분을 건너뛰기 위해서)

     (4) 0이 아닌경우 해당 숫자를 그대로 temp에 저장한다.

     (5) 숫자가 아닌 'S', 'D', 'T'인 경우 해당 값을 answer에 push한다.

     (6) '#'일 경우 직전 값에 -1을 곱해준다.

     (7) '*'일 경우 직전 값과 그 전 값을 2배로 만들어야 하기 때문에 해당 값에 2를 곱해준다.

     (8) answer에 push 됐던 값들을 숫자형으로 변환해서 모두 더해준다.
    */
}
