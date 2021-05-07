function solution(numbers){
    const numbers_len = numbers.length;
    let sums = [];
    for(let i = 0 ; i < numbers_len-1 ; i++){
        for(let j = i+1 ; j<numbers_len ; j++){
            sums.push(numbers[i]+numbers[j]);
        }
    }
    sums = Array.from(new Set(sums));
    return sums.sort(function (a,b){
        return a-b
    });
}
const numbers = [5,0,2,7];
console.log(solution(numbers));