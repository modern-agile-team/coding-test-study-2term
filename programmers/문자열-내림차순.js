function solution(s) {
     
    let answer;
    
    answer = s.split("");
    answer.sort();
    answer.reverse();
    
    return answer.join("");
}