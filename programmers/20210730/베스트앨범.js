function solution(genres, plays) {
    const result = [];
    const genrePlayCount = {};
    const songPlayCount = {};
    
    for (let i = 0; i < plays.length; i += 1) {
        genrePlayCount[genres[i]] = 0;
        songPlayCount[genres[i]] = [];
    };
    
    for (let i = 0; i < plays.length; i += 1) {
        genrePlayCount[genres[i]] += plays[i];
        songPlayCount[genres[i]].push([plays[i], i]);
    };
    
    for (let el in songPlayCount) {
        songPlayCount[el].sort((a, b) => b[0] - a[0]);
    };
    
    const genrePlaySorted = Object.keys(genrePlayCount).sort((a, b) => genrePlayCount[b] - genrePlayCount[a]);
    
    for (let genre of genrePlaySorted) {
        if (songPlayCount[genre].length === 1) result.push(songPlayCount[genre][0][1]);
        else result.push(songPlayCount[genre][0][1], songPlayCount[genre][1][1]);
    };
    
    return result;
};