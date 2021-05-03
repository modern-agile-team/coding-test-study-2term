function solution(s){

    const p = s.match(/p/gi);
    const y = s.match(/y/gi);

    if (p !== null && y !== null) 
        return p.length === y.length;

    // 위의 조건문에서 둘 다 null이 아닌 경우를 가정하고 return을 하였는데
    // 나머지 두 가지 경우의 수 (둘 다 null인 경우, 둘 중 하나만 null인 경우)가
    // 반환하는 값이 각각 true와 false로 달라야 하는데
    // return false가 어떻게 이 두 가지 값을 반환하게 되는지 궁금합니다. 
    
    return false;
}