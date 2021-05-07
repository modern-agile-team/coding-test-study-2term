function solution(s) {
  let result = parseInt(s);
  
  if ((s.length === 4 || s.length === 6) && s == result) return true;
  return false;
}
