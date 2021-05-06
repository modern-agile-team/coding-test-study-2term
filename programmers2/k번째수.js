function solution(array, commands) {
    let answer = [];
    for( let i = 0; i < commands.length; i++) {
        let array2 = array.slice(commands[i][0] - 1, commands[i][1]);
        array2.sort((a,b) => a - b);
        let num = commands[i][2] - 1;
        answer.push(array2[num]);
    }
    return answer;
}
