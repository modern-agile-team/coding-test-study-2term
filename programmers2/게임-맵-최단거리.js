function solution(maps) {
    const yLen = maps.length;
    const xLen = maps[0].length;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const queue = [[0, 0]];
    
    while (queue.length) {
        let xy = queue.shift();
        let x = xy[0];
        let y = xy[1];

        for (let j = 0; j < 4; j++) {
            let nx = x + dx[j];
            let ny = y + dy[j];

            if (nx < 0 || nx >= xLen || ny < 0 || ny >= yLen) continue;
            if (maps[ny][nx] === 0) continue;
            if (maps[ny][nx] === 1) {
                maps[ny][nx] = maps[y][x] + 1;
                queue.push([nx,ny]);
            }
        }                
    }
    const answer = maps[yLen - 1][xLen - 1];
    return answer === 1 ? -1 : answer;
}

