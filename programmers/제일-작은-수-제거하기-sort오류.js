function solution(arr) {
    arr.sort((a, b) => (b-a))
    if (arr.length < 2) return [-1]
    else arr.length = arr.length - 1;
    return arr;
//처음에 작성했다가 실패한 코드인데 실패하는 이유를 모르겠습니다.
