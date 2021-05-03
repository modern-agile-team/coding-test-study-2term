function solution(s){
    s = s.toLowerCase();
    let p = s.match(/p/g);
    let y = s.match(/y/g);
    
    if(p !=null && y != null){
      if(p.length == y.length){
         return true;
      }
      else if(p.length != y.length){
        return false;
        
      }
    }
    if(p == null && y == null){
      return true;
    }  
    else 
        return false;
    
    
}
