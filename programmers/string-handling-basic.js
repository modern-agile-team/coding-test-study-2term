function solution(s){
    const linerMeasure = s.length;
    if(linerMeasure === 4 | linerMeasure === 6){
        for (let i = 0 ; i<linerMeasure; i++){
            let store = 0;
            for (let j = 0 ;  j<10 ; j++){
                if (s[i] == j){
                    store = 1;
                }
            }
            if (store === 0){
                return console.log("false");
            }
        }
        return console.log("true");
    }
    console.log("문자열의 길이 조건에 어긋난다.");
}
let s ="1234";
solution(s);