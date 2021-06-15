function solution(id) {
    const lowerId = id.toLowerCase()
    let newId = lowerId.replace(/[^-_.a-z0-9]/g,'').replace(/\.{2,}/gm,'.').replace(/^\.|\.$/g,'')
    if (newId.length === 0) {
        newId = 'a'
    }
    //5단계 -> newId 6~7단계 answer
    let answer = newId.slice(0, 15).replace(/\.$/g,'')
    const lastword = answer.charAt(answer.length - 1);
    if (answer.length <= 2) {
        for (let i = answer.length; i < 3; i++) {
            answer += lastword
        }
    }
    return answer
}
