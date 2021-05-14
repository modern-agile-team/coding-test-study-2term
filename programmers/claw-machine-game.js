function solution(board, moves) {
    const numbers = [];
    for (let h = 0; h < board.length; h++) numbers.push(0);
    for (let i = 0; i < moves.length; i++) {
        let x = moves[i]-1;
        while (numbers[x] < board.length) {
            if (board[numbers[x]][x]=== 0) numbers[x] += 1;
            else {
                stackings.push(board[numbers[x]][x]);
                numbers[x] += 1;
                break;
            }
        }
        if (stackings.length >= 2) {
            for (let j = 0; j < stackings.length-1; j++) {
                if (stackings[j] === stackings[j + 1]) {
                    stackings.splice(j, 2);
                    result += 2;
                }
            }
        }
    }
    return result;
}
const board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
let stackings = [];
let result = 0;
solution(board, moves);