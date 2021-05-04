function solution(s){
    var answer = true;
    var pcount = 0;
    var ycount = 0;
    for (var i in s){
        if (s[i] == 'p' || s[i] == 'P'){
            pcount++;
        }
        else if (s[i] == 'y' || s[i] == 'Y'){
            ycount++;
        }
    }
    if (pcount != ycount) {
        answer = false;
    }
    return answer;
}