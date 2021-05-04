function solution(s){

    var p_num = 0;
    var y_num = 0;
    
    for(let i=0; i<s.length; i++){
        if ( s[i] === 'p' || s[i] === 'P' ){
            p_num += 1;
        } else if( s[i] === 'y' || s[i] === 'Y' )
            y_num += 1;
    }
    if(p_num === y_num){
        return true;
    } else {
        return false;
    }
}
