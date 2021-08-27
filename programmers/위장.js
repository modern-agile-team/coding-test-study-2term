function solution(clothes) {
    const obj = clothes.reduce(function(cloth, kind) {
        cloth[kind[1]] = cloth[kind[1]] ? cloth[kind[1]] + 1 : 1;
        return cloth;
    }, {});
    
    const value = Object.values(obj);
    
    let answer = 1;
    
    if (value.length === 1) return value[0];
    else value.forEach(el => answer *= (el + 1));

    return answer - 1;
}