function solution(n, lost, reserve) {
    let actualLost = lost.filter(a => !reserve.includes(a));
    let actualReserve = reserve.filter(b => !lost.includes(b));
    
    return n - actualLost.filter(a => {
        let borrow = actualReserve.find(r => Math.abs(r-a) === 1);
        if (!borrow) return true;
        actualReserve = actualReserve.filter(r => r !== borrow);
    }).length;
}
