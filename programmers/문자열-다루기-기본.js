function solution(s) {
    
    let answer = false;
    let temp = Number(s)
    
    return (s.length === 4 || s.length === 6) && temp === parseInt(s) ? true : false;
    
};
