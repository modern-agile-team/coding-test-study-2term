function pullDoll(board, move) {
  const dollIndex = board.findIndex((column) => column[move] !== 0);
  if (dollIndex === -1) return -1;
  const doll = board[dollIndex][move];
  board[dollIndex][move] = 0;
  return doll;
}

function solution(board, moves) {
  moves = moves.map((move) => move - 1);
  let basket = [];
  let poppedTime = 0;
  basket.pop = function () {
    poppedTime += 2;
    return Array.prototype.pop.apply(this, arguments);
  }
  moves.forEach((move) => {
    const doll = pullDoll(board, move);
    if (doll === -1) return;
    if (doll === basket[basket.length - 1]) basket.pop();
    else basket.push(doll);
  });
  return poppedTime;
}

const board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
// console.log(pullDoll(board, 0));
// console.log(pullDoll(board, 4));
// console.log(pullDoll(board, 2));
// console.log(pullDoll(board, 4));
// console.log(pullDoll(board, 0));
// console.log(pullDoll(board, 1));
// console.log(pullDoll(board, 0));
// console.log(pullDoll(board, 3));

console.log(solution(board, moves));