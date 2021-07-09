function solution(numbers) {
    const numArr = numbers.split("");
    const numLen = numArr.length;
    const answer = [];

    function getPermutation (numArr, selectNum) {
        const result = [];
        if (selectNum === 1) return numArr.map((value) => [value].join());
        numArr.forEach((fix, idx, arr) => {
            const nonFix = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
            const permutations = getPermutation(nonFix, selectNum - 1);
            const conneted = permutations.map((permutation) => [fix, ...permutation].join(''));
            result.push(...conneted);
        })
        return result;
    }

    for (let selectNum = 1; selectNum < numLen + 1; selectNum++) {
        const result = (getPermutation(numArr, selectNum));
        const uniqueArr = result.filter((element, idx) => {
            return result.indexOf(element) === idx;
        });
        uniqueArr.forEach((value) => {
            if (value.startsWith('0')) return value.substr(1);
            if (isPrime(value)) answer.push(value);
        })

        function isPrime(value) {
            if (value < 2) return false;
            if (value === 2) return true;
            for (let i = 2; i <= Math.sqrt(value); i++) {
              if (value % i === 0) return false;
            }
            return true;
        }
    }
    return answer.length;
}
