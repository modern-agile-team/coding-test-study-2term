function solution(n, lost, reserve) {
    const differReverse = reserve.filter(x => !lost.includes(x));
    const differLost = lost.filter(x => !reserve.includes(x));  // 여분의 옷이 있었지만 도둑맞아 여분의 옷이 사라진 사람 제거
    differLost.sort((a,b) => { 
        return a-b
    });
    for (let i = 0 ; i < differLost.length ; i++) {
        if (differReverse.indexOf(differLost[i]-1) !== -1) {
        } else if (differReverse.indexOf(differLost[i]+1) !== -1) {
            differReverse.splice(differReverse.indexOf(differLost[i]+1), 1);
        } else {
            n -= 1;
        }
    }
    return n;
}
let n = 5;
const lost = [4, 2];
const reserve = [3, 5];
solution(n, lost, reserve);