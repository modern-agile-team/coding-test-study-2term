function solution(d, budget) {
    const price = d.sort((a,b) => a-b);
    let cnt = 0;
    for(let i=0; i<price.length; i++) {
        if(budget >= price[i]) {
            cnt ++;
            budget -= price[i];
        }
    }
    return cnt;
}
