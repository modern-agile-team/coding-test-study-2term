function solution(boards, moves) {
    const basket =[];
    const indexMoves = moves.map((x) =>  (x - 1));
    let cnt = 0;

    for (let move of indexMoves) {
         for (let board of boards) {
             if (board[move] !== 0) {
               if (basket[basket.length - 1] === board[move]) {
                     basket.pop();
                     cnt += 2; 
                  }
               else basket.push(board[move]);
               board[move] = 0;
               break;
             }
         }
     }
    return cnt;
}
