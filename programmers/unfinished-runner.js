const participant = ["leo","kiki","eden","leo"];
const completion = ["eden", "kiki"];
function solution(participant, completion) {
    let  counts = {};
    participant.forEach(function(i){
        if (i in counts){
            counts[i] += 1;
        }
        else{
            counts[i] = 1;
        }
    })
    completion.forEach(function(j){
        counts[j] -=1;
        if (counts[j]===0){
            delete counts[j];
        }
    })
    return Object.keys(counts);
}
solution(participant, completion);
/// 순기님이 forEach에 대해 알려주셔 작성할 수 있었던 코드입니다.