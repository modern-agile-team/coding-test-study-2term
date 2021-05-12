function solution(d, budget) {
    d.sort((a,b) => {
        return a-b
    });
    let count = 0;
    for (let i = 0; i < d.length; i++) {
        if(d[i] <= budget) {
            budget-=d[i];
            count += 1;
        } else {
            break;
        }
    }
    return count;
}
const d = [1,5,10];
const budget = 6;
solution(d,budget);