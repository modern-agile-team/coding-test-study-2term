function solution(numbers) {
    const stringNums = numbers.map((a) => a + "");

    function bubbleSort(stringNums) {
        for (let i = 0; i < stringNums.length; i++) {
            let swap = 0;
            for (let j = 0; j < stringNums.length - 1 - i; j++) {
                if ((stringNums[j] + stringNums[j + 1]) < (stringNums[j + 1] + stringNums[j])) {
                    swap = stringNums[j];
                    stringNums[j] = stringNums[j + 1];
                    stringNums[j + 1] = swap;
                }
            }
            if (!swap) break;
        }
        return stringNums;
    }
    const answer = bubbleSort(stringNums);
    return answer[0] === '0' ? '0' : answer.join("");
}
