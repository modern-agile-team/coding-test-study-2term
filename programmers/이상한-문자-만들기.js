function solution(s) {
  const answer = [];
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
        count = 0;
        answer.push(' ');
        continue;
    }
    if (count % 2 == 0 ) answer.push(s[i].toUpperCase());
    else  answer.push(s[i].toLowerCase());
   }
  return answer.join('');
}
