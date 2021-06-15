function solution(N,stages) {
    const failRate = [];
    const answer = {};
    const result = [];
    // 실패율 계산, aswer 객체에 스테이지를 키값, 실패율을 밸류값으로 저장
    for (let i = 1; i <= N; i++) {
        let winner = stages.filter((el) => (el >= i)).length;
        let challenger = stages.filter((el) => (el == i)).length;
        failRate.push(challenger / winner);
        
        answer[i] = failRate[i - 1]
    }
    // 객체 밸류값을 기준으로 정렬
    let sortanswer = [];
    for (let sort in answer) {
        sortanswer.push([sort, answer[sort]]);
    }
    
    sortanswer.sort((a, b) => b[1] - a[1]);
    // 키값만 따로 배열에 저장 후 리턴
    for (let el of sortanswer) {
        result.push(parseInt(el[0]));
    }
    return result;
}
