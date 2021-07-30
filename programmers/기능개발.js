function solution(progresses, speeds) {
    const stacks = progresses.map((x, index) => Math.ceil((100 - x) / speeds[index])).reverse();
    const answers = [];
    let count = 1;
    let peek = stacks.pop();
    
    while (stacks.length > 0) {
        if (stacks[stacks.length - 1] > peek) {
            answers.push(count);
            count = 1;
            peek = stacks[stacks.length - 1];
        } else count += 1; 
        stacks.pop();
    }
    answers.push(count);
    return answers;
}
