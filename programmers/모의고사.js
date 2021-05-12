function solution(answers) {
    
    const firstAns = [1,2,3,4,5]; 
    const secondAns = [2,1,2,3,2,4,2,5]; 
    const thirdAns = [3,3,1,1,2,2,4,4,5,5]; 
    
    let first = 0;
    let second = 0;
    let third = 0;
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === firstAns[i % 5]) first += 1;
        if (answers[i] === secondAns[i % 8]) second += 1;
        if (answers[i] === thirdAns[i % 10]) third += 1;
    }
    
    if ((first > second) && (first > third))
        return [1];
    else if ((first === second) && (first > third))
        return [1, 2];
    else if ((first > second) && (first === third))
        return [1, 3];
    else if ((second > first) && (second > third))
        return [2];
    else if ((second > first) && (second === third))
        return [2, 3];
    else if ((third > first) && (third > second))
        return [3];
    else
        return [1,2,3];
}