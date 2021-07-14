function solution(brown, yellow) {
    
    for (let i = 0; i <= yellow; i += 1) {
        if (yellow % i === 0) {
            let h = i;
            let w = yellow / h;
            
            if (brown === w * 2 + h * 2 + 4) {
                return [w + 2, h + 2]
            }
        }
    }
    return;
}
