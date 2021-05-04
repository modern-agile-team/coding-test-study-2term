function solution(n, lost, reserve) {
  let duplicated = lost.filter((val) => reserve.includes(val));
  lost = lost.filter((val) => !duplicated.includes(val));
  reserve = reserve.filter((val) => !duplicated.includes(val));
  lost = lost.filter((lostVal) => {
    let reserveIndex = reserve.findIndex((reserveVal) => (lostVal === reserveVal + 1 || lostVal === reserveVal - 1));
    if (reserveIndex === -1) return true;
    reserve.splice(reserveIndex, 1);
    return false;
  });
  return n - lost.length
}

console.log(solution(7, [2, 3, 4, 6], [1, 2, 3]));