function solution(board, moves) { 
    const basket = [];
    let count = 0;
    for (let el of moves) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][el - 1] !== 0) {
                basket.push(board[i][el - 1]);
                board[i][el - 1] = 0;
                break; 
            }
        }
        if (basket.length > 1 && basket[basket.length - 1] === basket[basket.length - 2]) {
            basket.pop()
            basket.pop()
            count += 2
        }
    }
    return count
}
