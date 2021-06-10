function solution(N, stages) {
    const arr = {};
    const result = [];
    const sortobj = [];
    let s = 0;
    let avg = 0
    
    for (let i = 1; i < N + 1; i++) {           // 실패율 구하는 for문
        s = 0;
        for (let j = 0; j < stages.length; j++) {
            if (i === stages[j]) s += 1;
        }
        avg = s / stages.length;
        stages = stages.filter((el) => el !== i);
        arr[i] = avg;
    }
    
    for (let number in arr) {                   //실패율 높은 순으로 정렬
      sortobj.push([number, arr[number]]);
    }
    sortobj.sort(function(a, b) {
      return b[1] - a[1];
    });
    
    for (let i = 0; i < sortobj.length; i++)    //정렬 된 배열에서 스테이지 번호만 가져오기
        result.push(parseInt(sortobj[i][0]));
    return result
} 