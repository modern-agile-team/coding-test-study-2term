function solution(n) {

    let result = "";

    for (let i = 0; i < n; i++) {
        if ( i % 2 === 0) {
            result += "수"
        } else {
            result += "박" 
        }
    }
    return result    
}
