function solution(s) {
    const arr = s.split("");
    if (arr.length % 2 === 0) {
        const startNum = (arr.length / 2);
        return arr[startNum - 1] + arr[startNum];
    }
    else {
        const Num = (arr.length + 1) / 2 - 1;
        return arr[Num];
    }

}
