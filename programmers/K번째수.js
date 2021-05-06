function solution(array, commands) {
    
    let answer = [];
    let new_arr = [];
    
    for (let i = 0; i < commands.length; i++) {
        
            new_arr = array.slice(commands[i][0] - 1, commands[i][1]);
            new_arr.sort(
                        (a, b) => {return a - b;} 
                        );
            answer.push(new_arr[commands[i][2] - 1]);
        
    }
    return answer;
}