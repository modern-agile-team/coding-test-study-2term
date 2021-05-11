function solution(absolutes, signs) {
    return absolutes.reduce((acc, value, curIndex) => {
                        if (!signs[curIndex]) value *= -1 ;
                        return acc + value ;}, 0);
};
