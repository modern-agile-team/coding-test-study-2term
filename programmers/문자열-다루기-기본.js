function solution(s) {
    
    const len = s.length;
    console.log(len)
    
    return (len === 4 || len === 6) && !isNaN(s) ? true : false;
    
    // 테스트 11번에서 통과하지않는데 구글링해도 잘모르겠습니다.
    // 테스트 11은 지수형식일때라고 합니다
}
