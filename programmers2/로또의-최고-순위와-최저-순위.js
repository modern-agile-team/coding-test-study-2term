function solution(lottos, win_nums) {
    const result = [];
    const rank = [6, 6, 5, 4, 3, 2, 1];
    const zeroLen = lottos.filter( a => a === 0).length;
    
    const lottosNum = lottos.filter(b => b !== 0);
    const minRank = lottosNum.filter(c => win_nums.includes(c)).length;  
    
    result.push(rank[minRnk]);
    result.push(rank[minRank + zeroLen]);
    result.sort();
    return result;
}
