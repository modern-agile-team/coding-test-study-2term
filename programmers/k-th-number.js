function solution(arry, commands){
    const cd_len = commands.length;
    let results = [];
    for (let i = 0 ;  i < cd_len ; i++){
        let start = commands[i][0]-1;
        let end = commands[i][1];
        let k = commands[i][2]-1;
        let arryCuted = (arry.slice(start,end)).sort();
        results.push(arryCuted[k]);
    }
    return console.log(results);
}
const arry = [1,5,2,6,3,7,4];
const commands = [[2,5,3],[4,4,1],[1,7,3]]; 
solution(arry,commands);