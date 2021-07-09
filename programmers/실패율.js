function solution(N, stages) {
   const answers = [];
   
   let totalNum = stages.length;
   let count = 0;
   let failRate = 0;
    
   for (let i = 1; i < N+1; i++) {
       count = stages.filter(el => i === el).length;
       if (count === 0) failRate = 0;
       else  failRate = count / totalNum;
       totalNum -=  count;
       answers.push({num: i, ratio:failRate});
   }
    
    answers.sort((a,b)=>{
        if (a.ratio > b.ratio) return -1; 
        else return 1; 
    })
    return answers.map(el => el.num);
}   

