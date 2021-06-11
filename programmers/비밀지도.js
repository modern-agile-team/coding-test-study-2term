function solution(n, arr1, arr2) {
    const twoNum1 = [];
    const twoNum2 = [];
    const answer = Array.from({length:n}, () => '');
    
    for (let i = 0; i < n; i++) {
        twoNum1.push(arr1[i].toString(2));
        twoNum2.push(arr2[i].toString(2));
        twoNum1[i] = twoNum1[i].padStart(n, 0);
        twoNum2[i] = twoNum2[i].padStart(n, 0);

        for (let j = 0; j < n; j++) {
            if ((twoNum1[i].charAt(j) + twoNum2[i].charAt(j)) >= 1) {
                answer[i] += "#";
            }
            else answer[i] += " ";
        }
    }
    return answer;
}