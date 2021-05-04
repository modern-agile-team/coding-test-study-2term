function solution(s) {
    let a = s.length;
    let b = [];
    for (let i=0 ; i<a ; i++){
        b.push(a[i]);
    }
    return(b.join("").sort().reverse());

   }
   let s = "Zbvdefg";
   console.log(solution(s));
