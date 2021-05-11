function solution(n, lost, reserve) {
    let realLost = lost.filter(i => reserve.indexOf(i) === -1).sort((a, b) => a - b);
    let realReserve = reserve.filter(i => lost.indexOf(i) === -1).sort((a, b) => a - b);
    const studentHave = n - realLost.length; 
    const spare = [];  
    for (let i = 0; i < realLost.length; i++) {
        for (let j = 0; j < realReserve.length; j++) {
            if (realReserve[j] + 1 === realLost[i] || realLost[i] === realReserve[j] - 1 || realLost[i] === realReserve[j]) {
                spare.push(realLost[i])
                realReserve[j] = -30
                realLost[i] = -30   
            }
        }
    }
    return spare.length + studentHave;
}
