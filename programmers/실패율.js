function solution(N, stages) {
    const [obj, result, sortArr] = [{}, [], []];
  
    for (let i = 1; i < N + 1; i++) {           // 실패율 구하는 for문
        let s = 0, 
            avg = 0,
            n = stages.length;
        
        for (let j of stages) {
            if (i === j) s += 1;
        }
        avg = s / n;
        stages = stages.filter((el) => el !== i);
        obj[i] = avg;
    }
  
    for (let number in obj) {                   //실패율 높은 순으로 정렬
      sortArr.push([number, obj[number]]);
    }
    sortArr.sort((a, b) => {
      return b[1] - a[1];
    });
  
    for (let i = 0; i < sortArr.length; i++)    //정렬 된 배열에서 스테이지 번호만 가져오기
        result.push(parseInt(sortArr[i][0]));
    return result
  } 
  
  