function solution(lottos, winNums) {
    let result = [0, 0];
    for (let i = 0; i < 6; i++) {
        if (lottos[i] === 0) {
            result[0]++;
        }
        for (let j = 0; j < 6; j++) {
            if (lottos[i] === winNums[j]) {
                result[0]++;
                result[1]++;
            }
        }
    }
    for (let i = 0; i < 2; i++) {
        switch(result[i]) {
            case 6:
                result[i] = 1;
                break;
            case 5:
                result[i] = 2;
                break;
            case 4:
                result[i] = 3;
                break;
            case 3:
                result[i] = 4;
                break;
            case 2:
                result[i] = 5;
                break;
            default:
                result[i] = 6;
        }
    }
    return result;
}