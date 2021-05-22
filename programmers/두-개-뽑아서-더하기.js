function solution(numbers) {
    
    const len = numbers.length;
    let result = [];
    let add;
    
    for (let i = 0; i < len - 1; i++){
        for (let j = i + 1; j < len; j++){
            add = numbers[i] + numbers[j];
            if (result.includes(add) === false)
                result.push(add);
        }
    }
    result.sort((a, b) => {return a - b;});
    return result;
}