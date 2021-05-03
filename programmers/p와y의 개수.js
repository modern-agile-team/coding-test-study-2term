function solution(s){
    
    var p = s.match(/p/gi);
    var y = s.match(/y/gi);
    
    if (p != null && y != null ){
        if (p.length != y.length)
            return false;
    
        else if (p.length == y.length)
            return true;
    }
    else if (p == null && y == null )
        return true;
    
    else
        return false;
}