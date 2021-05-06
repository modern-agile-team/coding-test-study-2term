function solution(s) {
    for (let i = 0; i < s.length; i++) {
        if ((s[i].charCodeAt(0) >= 97) && (s[i].charCodeAt(0) <= 122)) {
            return false
        }
    }
    return s.length === 4 || s.length === 6;
}