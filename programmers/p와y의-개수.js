function solution(s){

    const p = s.match(/p/gi);
    const y = s.match(/y/gi);

    if (p !== null && y !== null) 
        return p.length === y.length;
    
    if (p === null && y === null)
        return true;
        
    return false;
}