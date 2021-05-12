function solution(answers) {
    const answerArr = []
    const supo1 = [1,2,3,4,5];
    const supo2 = [2,1,2,3,2,4,2,5];
    const supo3 = [3,3,1,1,2,2,4,4,5,5];
    const rank = [0,0,0]; //result[0] -> supo1
    let i = 0; 
    let j = 0; 
    let k = 0;
    
    for (let answer of answers) {
        if (answer === supo1[i]) {
            rank[0]++;
            i++;
            if (i === 5) i = 0;
        }
        else {
            i++;
            if (i === 5) i = 0; 
        }
        
        if (answer === supo2[j]) {
            rank[1]++;
            j++;
            if (j === 8) j = 0;
        }
        else {
            j++;
            if (j === 8) j = 0;
        }
        
        if (answer === supo3[k]) {
            rank[2]++;
            k++;
            if (k === 10) k = 0;
        }
        else {
            k++;
            if (k === 10) k = 0;
        }        
    }    
    for (let l = 0; l < 3; l++) {
        if (rank[l] === Math.max.apply(null, rank)) answerArr.push(l+1)
    }
    return answerArr.sort();
}
