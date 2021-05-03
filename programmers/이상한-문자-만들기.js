function upperToLowerLowerToUpper(s) {
  return s.split('').map((val, idx) => {
    if (idx % 2) return val.toLowerCase();
    else return val.toUpperCase();
  }).join('');
}

function solution(s) {
  var answer = s.split(' ').map((val) => {
    return upperToLowerLowerToUpper(val);
  }).join(' ');
  return answer;
}