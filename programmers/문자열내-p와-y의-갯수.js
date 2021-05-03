function solution(s){
    var pNum = s.match(/p/gi);
    var yNum = s.match(/y/gi);
    
    if (pNum === null && yNum === null) {
      return true;
    }
    if (pNum === null || yNum === null) {
        if (pNum === null && pNum != yNum) {
            return false; }
        if (yNum === null && pNum != yNum) {
            return false; }
    }
    return (pNum.length === yNum.length) ? true : false;
}

