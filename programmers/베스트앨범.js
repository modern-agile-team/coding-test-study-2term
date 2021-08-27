function solution(genres, plays) {
    const sums = {};
    const numbers = {};
    const result = [];
    
    genres.forEach((x, idx) => {
        (x in sums) ? sums[x] += plays[idx] : sums[x] = plays[idx];
    });
    Object.keys(sums)
        .sort((a, b) => sums[b] - sums[a])
        .forEach(x => {
        const nums = [];

        for(let i = 0; i < genres.length; i++) {
            if(x === genres[i]) nums.push([i, plays[i]]);
        }
        numbers[x] = nums.sort((a, b) => b[1] - a[1]).slice(0, 2);
        numbers[x].forEach(v => result.push(v[0]));
    });
    return result;
}
