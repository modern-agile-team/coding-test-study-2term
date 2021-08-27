function solution(clothes) {
    const clothesObj = {};
    let result = 1;
    
    for (let i = 0; i < clothes.length; i += 1) {
        clothesObj[clothes[i][1]] = [];
    };
    
    for (let i = 0; i < clothes.length; i += 1) {
        clothesObj[clothes[i][1]].push(clothes[i][0]);
    };
    
    for (let key in clothesObj) {
        result *= (clothesObj[key].length + 1);
    };
    
    return result - 1;
};