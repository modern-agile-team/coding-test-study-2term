function solution(board, moves) {
    const stack = [];
    let answer = 0;
    let stlen = 0;
    
    for (let j = 0; j < moves.length; j++) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][moves[j] - 1] === 0) continue;
            else if (board[i][moves[j] - 1] !== 0) {
                stack.push(board[i][moves[j] - 1]);
                board[i][moves[j] - 1] = 0;
            }
            
            stlen = stack.length;

            if (stlen > 1) {
                if (stack[stlen - 1] === stack[stlen - 2]) {
                    stack.pop();
                    stack.pop();
                    answer += 2;
                }
            }

            break;
        }
    }
    return answer;
}

