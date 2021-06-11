function solution(N, stages) {
    const arr = Array.from(Array(N), () => new Array(2));
    let allPlayer = stages.length;
    for (let i = 1; i < N + 1; i++) {
        const nowStepPlayer = stages.filter(a => a === i).length;
        arr[i - 1][0] = i;
        arr[i - 1][1] = nowStepPlayer / allPlayer;
        allPlayer -= nowStepPlayer;
    }
    arr.sort((a, b) => b[1] - a[1]);
    return arr.map(a => a[0]);
}

