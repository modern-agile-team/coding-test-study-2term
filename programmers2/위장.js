function solution(clothes) {
    let answer = 1;
    const clothesObj={};
    
    for (let i = 0; i < clothes.length; i += 1){
        clothesObj[clothes[i][1]] = (clothesObj[clothes[i][1]] || 1) + 1;
    };
    
    for(const key in clothesObj){
        answer *= clothesObj[key];
    };
    
    return answer - 1;
}

