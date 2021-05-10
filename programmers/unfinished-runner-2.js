const participant = ["leo","kiki","eden","leo"];
const completion = ["eden", "kiki"];
function solution(participant, completion) {
    let  counts = {};
    for (let i of participant){
        if ( i in counts ){
            counts[i] += 1;
        }
        counts[i] = 1;
        participant.splice(participant.indexOf(i),0);
    }

    for (let j of completion){
        counts[j] -=1;
        if (counts[j]===0){
            delete counts[j];
        }
    }
    return Object.keys(counts);
}
solution(participant, completion);