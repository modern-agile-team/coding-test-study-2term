function solution(board, moves) {
    
    // const newMoves = moves.map((x) =>  x - 1);
    let count = 0;
    let stack = [];
    
    for (let i = 0; i < moves.length; i++) {
        let now = moves[i] -1;
        for(let j = 0; j < board.length; j++) {
            if (board[j][now] !== 0) {
                if (stack[stack.length -1] === board[j][now]) {
                    stack.pop();
                    count += 2;
                }
                else {
                    stack.push(board[j][now])
                }
                board[j][now] = 0;
                break;
            }
        }
    }
    return count;
}
