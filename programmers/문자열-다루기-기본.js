function solution(s) {
    const S_LENGHT = s.length;
    let temp = Number(s);
    if ((S_LENGHT === 4 || S_LENGHT === 6) && temp === parseInt(s)) {
        return true;
    }
    else return false; 
}