function solution(brown, yellow) {
    let yellowWidth = 1;
    let yellowHeigth = yellow / yellowWidth;
    
    while (yellowHeigth >= 1) {
        if (yellowHeigth % 1 === 0 && yellowWidth >= yellowHeigth) {
            if (brown === (((yellowWidth + yellowHeigth) * 2) + 4)) return [yellowWidth + 2, yellowHeigth + 2];
        }
        yellowWidth += 1;
        yellowHeigth = yellow / yellowWidth;
    }
}