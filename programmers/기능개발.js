function solution(progresses, speeds) {
    const answer = [];
    const done = [];

    while (progresses.length > 0) {

        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }

        if (progresses[0] >= 100) {
            for (let j = 0; j < progresses.length; j++) {
                if (progresses[j] >= 100) done.push(progresses[j]);
                else break;
            }

            answer.push(done.length);
            
            while (done.length > 0) {
                progresses.shift();
                speeds.shift();
                done.shift();
            }
        }
    }
    return answer;
}
