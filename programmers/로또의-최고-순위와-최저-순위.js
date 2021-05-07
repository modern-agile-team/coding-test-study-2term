function solution(lottos, win_nums) {
    
    let zeroNum = 0;
    let matchNum = 0;
    
    for (let i = 0; i < 6; i++) {
        if(lottos[i] === 0) zeroNum += 1; // lottos배열에서 0의 갯수를 셈하여 zeroNum에 더해줌
        
        for (let j = 0; j < 6; j++) {
            if (lottos[i] === win_nums[j]) {
                matchNum += 1; // lottos배열에서 win_nums배열원소들과 비교해서 맞으면 더해줌
                break; //  맞는 값을 찾으면 더 반복 할 필요가 없으므로 바깥for문으로 이동
            }
        }
    }
    
    let best = 7 - matchNum - zeroNum; // match와 zero가 모두 맞다고 가정
    let worst = 7 - matchNum; // zero는 모두 틀리다고 가정
    
    if (best === 7) best -= 1;  
    if (worst === 7) worst -= 1; 
    
    return [best, worst];
}
