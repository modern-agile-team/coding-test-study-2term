function solution(n){
    let A = "수박";
    let B = "수";
    let C = Math.floor(n/2);
    let D ="";
    if (n == 1){
        return console.log("수");
    }
    for (let i = 0 ;  i<C ; i++){
        D+=A;
    }
    if ( n % 2 !=0){
        return (D+B);
    }
    else {
        return (D);
    }
}
console.log(solution(3));