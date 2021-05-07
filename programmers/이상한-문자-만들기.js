function upperToLowerLowerToUpper(s) {
  return [...s].map((val, idx) => {
    if (idx % 2) return val.toLowerCase();
    else return val.toUpperCase();
  }).join('');
}

function solution(s) {
  let answer = s.split(' ').map((val) => {
    return upperToLowerLowerToUpper(val);
  }).join(' ');
  return answer;
}