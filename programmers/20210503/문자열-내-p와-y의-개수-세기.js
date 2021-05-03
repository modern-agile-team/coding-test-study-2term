function solution(s){
    var count = 0;
    for(var i = 0; i < s.length;  i++)
        if (s[i] == "p" || s[i] == "P"){
            count++;
        }
        else if(s[i] == "y" || s[i] == "Y")
            {
            count--;
        }

    return count == 0;
}