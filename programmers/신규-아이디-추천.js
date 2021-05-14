function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 소문자로 치환
        .replace(/[^\w-_.]/g,'') // 2
        .replace(/\.{2,}/g,'.') // 3
        .replace(/^\.|\.%/g,'') // 4
        .replace(/^$/,'a') // 5
        .slice(0, 15).replace(/\.$/g,'')
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len -1).repeat(3 - len);
}
