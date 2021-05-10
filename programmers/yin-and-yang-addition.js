function solution(absolutes, signs) {
    let sum = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i]) {
            sum += absolutes[i];
        } else{
            sum -= absolutes[i];
        }
    }
    return sum;
}
const absolutes = [4, 7, 12];
const signs = [true, false, true];
solution(absolutes, signs);