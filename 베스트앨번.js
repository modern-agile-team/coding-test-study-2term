function solution(genres, plays) {
    const obj = {};
    const playSet = new Set(genres);
    const genresKinds = [...playSet];
    const songOrder = [];
    let playCnt = {};
    const answer = [];
    
    for (let el of genres) obj[el] = {};
    //{ 장르종류 : {} } Object 생성
    for (let el of genresKinds) playCnt[el] = 0; 
    //{ 장르종류 : 재생횟수 초기값(0) } Object 생성
    
    genres.forEach((el, index) => {
        obj[el][index] = plays[index];
        //{ 장르종류 : { 고유번호 : 재생횟수 } } 
        playCnt[el] += plays[index];
        //{ 장르종류 : 재생횟수 } 
    })
    
    for (let el in obj) songOrder.push(el, (Object.keys(obj[el]).sort((a, b) => obj[el][b] - obj[el][a])));
    // [ 장르, [정렬된 고유번호들] ] 빈배열 songOrder에 push  

    const genresOrder = Object.keys(playCnt).sort((a, b) => playCnt[b] - playCnt[a]);
    // [정렬된 장르] 빈배열 genresOrder에 push
    
    for (let el of genresOrder) {
        let index = songOrder.indexOf(el) + 1;
        if (songOrder[index].length < 2) answer.push(parseInt(songOrder[index].shift()));
        else {
            answer.push(parseInt(songOrder[index].shift()));
            answer.push(parseInt(songOrder[index].shift())); 
        }
    }
    return answer;
}
