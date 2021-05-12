function solution(n, lost, reserve) {
    for (let i of lost) {
        if (reserve.includes(i)) {
            reserve.splice(reserve.indexOf(i), 1);
            lost.splice(lost.indexOf(i), 1);
        }
    }
    n = n - lost.length;
    if (lost.length <= reserve.length) {   
        for (let i = 0; i < lost.length; i++) {
            for (let j = 0; j < reserve.length; j++) {
                if (lost[i] - 1 === reserve[j]) {
                    n++;
                    break;
                }
                else if (lost[i] + 1 === reserve[j]) {
                    n++;
                    break;
                }
            }
        }    
    }
    else {
        for (let i = 0; i < reserve.length; i++) {
            for (let j = 0; j < lost.length; j++) {
                if (reserve[i] - 1 === lost[j]) {
                    n++;
                    break;
                }
                else if (reserve[i] + 1 === lost[j]) {
                    n++;
                    break;
                }
            }
        }
    }
    return n;
}