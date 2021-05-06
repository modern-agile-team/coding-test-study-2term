function solution(s) {
    if(s.length === 4 || s.length === 6) {
        if(isNaN(s) === false) {
            if(parseInt(s, 10) != s || parseInt(s) < 0) return false;
            else return true;
            }
        else return false;
    } 
    else return false;      
    }

