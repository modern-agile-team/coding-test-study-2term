function solution(absolutes, signs) {
    var sum = 0;
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i] === true) sum += absolutes[i];
        else sum -= absolutes[i];
    }
    return sum;
}
