function solution(board, moves) {
    const basket = [];
    let result = 0
    for (let i = 0; i < moves.length; i++) moves[i]--;
    for (let move of moves) {
        for (let select = 0; select < board.length; select++) {
            if (board[select][move] !== 0) {
                basket.push(board[select][move]);
                board[select][move] = 0;
                break;
            }
        }
        if (basket.length > 1) {
            if (basket[basket.length - 1] === basket[basket.length - 2]) {
                basket.pop();
                basket.pop();
                result += 2;
            }
        }
    }
    return result;
}