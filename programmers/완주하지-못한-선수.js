function solution(part, comp) {
    
    let drop = {};
    let result;
    
    for (let i = 0; i < part.length; i++){
        drop[part[i]] = part.filter(runner => part[i] === runner).length;
    }
    
    for (let j = 0; j < comp.length; j++){
        drop[comp[j]] -= 1; 
        if (drop[comp[j]] === 0)
            delete drop[comp[j]]
    }

    result = Object.keys(drop)
    
    return result.join("")
}


// 위와 같이 코드를 작성하니 효율성 테스트가 0점이 나와서 좀 찾아보다가 
// 다른 분이 forEach를 사용해서 푼 것을 우연히 보았습니다. 
// 정답을 보고 문제를 푼 것 같은 느낌이 들어서 정상작동하는 프로그램은 주석처리 했습니다.
// 그래도 forEach라는 문법에 대해 알 수 있어서 좋은 공부가 되었습니다.

/*
function solution(part, comp) {
    
    let drop = {};
    
    part.forEach (val => {
        if (val in drop) {
            drop[val] += 1;
        }
        else
            drop[val] = 1;   
        });
    
    comp.forEach (val => {
        if (val in drop)
            drop[val] -= 1;
        
        if (drop[val] === 0)
            delete drop[val];
    })
    
    return Object.keys(drop).join("");
    
}*/