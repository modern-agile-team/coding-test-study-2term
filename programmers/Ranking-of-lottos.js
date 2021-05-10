const win_nums = [31, 10, 45, 1, 6, 19];
const lottos = [44, 1, 0 ,0, 31, 25];
const Rankings = {6 : 1 , 5 : 2 , 4 : 3, 3 : 4, 2 : 5 , 1 : 6, 0 : 6};
function solution(lottos, win_nums){
    let Common = lottos.filter(x => win_nums.includes(x)).length;
    let Zeros = lottos.filter(element => 0 === element).length;
    return [Rankings[Common+Zeros],Rankings[Common]];
}
solution(lottos, win_nums);