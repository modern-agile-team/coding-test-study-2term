function solution(board, moves) {
    
    let result = [];
    let temp = 0;
    let disappear = 0;
    
    for (let i = 0; i < moves.length; i++) {
        
        for (let j = 0; j < board.length; j++) {
            
            if (board[j][moves[i] - 1] === 0) continue;      // 빈칸은 넘어가도록 하는 코드
            
            if (board[j][moves[i] - 1] > 0) {               // result라는 배열에 인형을 하나씩 담는 코드
                result.push(board[j][moves[i] - 1]);
                board[j][moves[i] - 1] = 0;
                break;
            }
        }
        let len = result.length;                    
        if (len > 1) {                                  // result에 2개 이상의 인형이 담겨있을 때
            if (result[len - 1] === result[len - 2]) {  // 연속되는 두 개가 같은 인형이라면
                result.splice(len - 2, 2);              // 제거하고
                disappear += 2;                         // 사라진 인형이라는 결과값 2증가
            }
        }
        
    }
    return disappear;
}

// 제가 처음에 짠 코드처럼 뽑은 모든 인형을 한 배열에 담아둔 다음에 인형을 빼는 절차를 밟으면
// 비효율적이기도 하고 여러가지 변수가 너무 많아서 정확성 테스트에서 자꾸 실패하더라구요
// 지원님께서 말씀해주신 알고리즘대로 풀어보니까 느끼기에 직관적이고 어떤 절차로 진행이 되는지 알기 쉬워서 그 방법으로 풀었습니다.
// 짜고 나니 지원님이 주신 코드와 거의 똑같네요;; ㅋㅋ