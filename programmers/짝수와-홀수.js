function solution(num) {
    var number
    if (num %2 ===0){
        number = "Even";
    }
    else{
        number = "Odd";
    }
    return number;
}
var num = 4 ;
console.log(solution(num));