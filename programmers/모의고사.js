function solution(answers) {
   const numberOne = [1,2,3,4,5];
   const numberTwo = [2,1,2,3,2,4,2,5];
   const numberThree = [3,3,1,1,2,2,4,4,5,5];
   let firstCnt = 0;
   let secondCnt = 0;
   let thirdCnt = 0;

   for(let i = 0; i < answers.length; i++) {
     if (numberOne[i % 5] === answers[i]) firstCnt++;
     if (numberTwo[i % 8] === answers[i]) secondCnt++;
     if (numberThree[i % 10] === answers[i]) thirdCnt++; 
   }

   if ((firstCnt > secondCnt) && (firstCnt > thirdCnt))
        return [1];
    else if ((firstCnt === secondCnt) && (firstCnt > thirdCnt))
        return [1, 2];
    else if ((firstCnt > secondCnt) && (firstCnt === thirdCnt))
        return [1, 3];
    else if ((secondCnt > firstCnt) && (secondCnt > thirdCnt))
        return [2];
    else if ((secondCnt > firstCnt) && (secondCnt === thirdCnt))
        return [2, 3];
    else if ((thirdCnt > firstCnt) && (thirdCnt > secondCnt))
        return [3];
    else
        return [1,2,3];
} 
