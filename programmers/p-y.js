function solution(s){
    var leng = s.length
    if (leng<=50){
        var num1 = s.match(/p/ig);
        var num2 = s.match(/y/ig);
        if (num1.length == num2.length){
            return true;
        }
        else{
            return false;
        }
    }
    else {
        console.log("다시 실행하세요.");
    }
}    
console.log(solution("PPyyYpoY"));