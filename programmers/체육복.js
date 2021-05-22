function solution(n, lost, reserve) {
    
    let answer = 0;
    let student = [];
    
    for (let i = 0; i < n; i++) student[i] = 1;                             // 길이는 전체 학생 수이고 모든 배열의 요소가 1인 배열 생성. 이하 S
    
    for (let i = 0; i < lost.length; i++) student[lost[i] - 1] = 0;         // S에서 체육복을 잃어버린 학생의 인덱스 (ex)[2, 4]라면 1번과 3번 인덱스 )의 요소를 0으로

    for (let i = 0; i < reserve.length; i++) student[reserve[i] - 1] += 1;  // 여분의 체육복을 가져온 학생의 인덱스의 요소를 1 증가

    for (let i = 0; i < student.length; i++) {                              
        if (!student[i] && student[i+1] > 1) {                              // S의 i번째 학생이 체육복이 없고 i + 1번째 학생이 2개 이상의 체육복이 있을 때 빌려주는 코드
            student[i] += 1;
            student[i+1] -= 1;
        } 
        else if (!student[i] && student[i-1] > 1) {                          // S의 i번째 학생이 체육복이 없고 i - 1번째 학생이 2개 이상의 체육복이 있을 때 빌려주는 코드
            student[i] += 1;
            student[i-1] -= 1;
        } 
    }
    for (let i = 0; i < n; i++)                                             // S의 요소가 1이상이면 answer 1증가
        if (student[i] > 0) answer += 1;
    
    return answer;
}