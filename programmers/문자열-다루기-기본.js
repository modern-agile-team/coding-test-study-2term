function solution(s) {
    
    const len = s.length;
    let result = [];
    s = s .split('');
    
    for (let i = 0; i < len; i++){
        
        if ((len === 4 || len === 6) && (isNaN(s[i]) === false))
            result.push("true");
        else
            result.push("false");
    }
    
    if (result.includes("false"))
        return false;
    
    return true;
}