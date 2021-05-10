function solution(lottos, win_nums) {
    let answer = [];
    let zeroCnt = 0;
    let Cnt = 0;
    let rank = [6,6,5,4,3,2,1];
    
    let numSet = new Set();
    for (let i = 0; i < win_nums.length; i++) {
        numSet.add(win_nums[i])
    }
    for (let i = 0; i < lottos.length; i++) {
        if (numSet.has(lottos[i])) { 
            Cnt++;
        }
        else if (lottos[i]==0) {
            zeroCnt++;
        }
    }
    answer[0]=rank[Cnt+zeroCnt]; 
    answer[1]=rank[Cnt];  
    return answer;
}