function solution(n, lost, reserve) {
    let haveNum = n - lost.length; 

    for (let i = 0; i < lost.length; i++) {
        if (reserve.indexOf(lost[i]) !== -1) {
            reserve.splice(reserve.indexOf(lost[i]), 1);
            lost.splice(i, 1);
            haveNum ++;
            i--;				
        }
    }

    for (let num of lost) {
        let frontCheck = reserve.indexOf(num - 1)
        let behindCheck = reserve.indexOf(num + 1)

        if (frontCheck !== -1) {
            reserve.splice(frontCheck, 1);
            haveNum++;
        } else if (behindCheck !== -1) {
            reserve.splice(behindCheck, 1);
            haveNum++;
        }
    }
    return haveNum;
}
