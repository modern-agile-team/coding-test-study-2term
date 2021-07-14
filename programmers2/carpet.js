function solution(brown, yellow) {
    const totalSize = brown + yellow;
    for (let height = 1; height <= yellow; height++) {
        const width = Math.floor(yellow / height);
        if (yellow % width === 0 && (width + 2) * (height + 2) === totalSize)
            return [width + 2, height + 2];
    }
}
