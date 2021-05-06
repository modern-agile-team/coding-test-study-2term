function solution(array, commands) {
    let answer = [];
    let answerArray = [];
    for(let i = 0; i < commands.length; i++) {
        answerArray = array.slice(commands[i][0]-1, commands[i][1]).sort(function (a,b){return a-b;});
        answer.push(answerArray[commands[i][2]-1])
    }
    return answer;
}
