function solution(brown, yellow) {
    const board = brown + yellow;  
    for (let i = parseInt(board / 2); i > 0; i--) {
        if (board % i === 0 && yellow === (i - 2) * (board / i - 2)) return [i, board / i]
    }
}
