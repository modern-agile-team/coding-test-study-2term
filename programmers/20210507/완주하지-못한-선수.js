function solution(participant, completion) {
    const result = {};
    for (let i = 0; i < participant.length; i++) {
        result[participant[i]] = 0;
    }
    for (let i = 0; i < participant.length; i++) {
        result[participant[i]]++;
    }
    for (let i = 0; i < completion.length; i++) {
        result[completion[i]]--;
    }
    for (let i = 0; i < participant.length; i++) {
        if (result[participant[i]] === 1) {
            return participant[i];
        }
    }
}