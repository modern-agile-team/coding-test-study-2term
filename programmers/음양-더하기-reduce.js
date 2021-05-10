function solution(absolutes, signs) {
    return absolutes.reduce((acc,cur,i)=> signs[i] ? acc+cur : acc - cur,0)
} // reduce 개념이해를 잘 못하고있습니다. 위 코드는 구글링해서 얻은 코드입니다.
