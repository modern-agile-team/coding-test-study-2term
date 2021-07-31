function solution(clothes) {
    const obj = {};
    let answer = 1;
    
    for (let i = 0;i < clothes.length;i++){
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    }

    for(let key in obj){
        answer *= obj[key];
    }
    
    return answer - 1;
}
