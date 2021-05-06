function solution(s) {
    
    const even = s.length / 2;
    const odd = (s.length / 2) - 0.5;
    
    return s.length % 2 === 1 ? s[odd] : s[even-1] + s[even]
    
}
