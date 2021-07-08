function solution(brown, yellow) {
    const sum = brown + yellow;
    
    for (let i = Math.floor(sum / 3); i > 0; i--) {
        if (sum % i === 0) {
            const width = i;
            const height = sum / i;
        
            if ((width - 2) * (height - 2) === yellow) {
                return [width, height];
            }
        }
    }
}
