function solution(s) {
    let splitS = s.split(' ');
    let splitWord;
    const answer = [];
    
    for (let el of splitS) { 
        splitWord = el.split('')
        
        for (let i = 0; i < splitWord.length; i++) {
            if (i % 2 === 0) splitWord[i] = splitWord[i].toUpperCase();
            else splitWord[i] =  splitWord[i].toLowerCase();  
        }
        
        answer.push(splitWord.join(''));
    }
    
    const result = answer.join(' ');
    return result;
}
