function solution(s) {
    let str = ""
    for (let i = 0, j = 0; i < s.length; i++, j++) {
        if (s[i] === " ") {
            j = -1;
            str += "";
        }
        if (j % 2 === 0) str += s[i].toUpperCase();
        else str += s[i].toLowerCase();
    }
    return str;
}