function solution(clothes) {
    const obj = {}
    let count = 1;
    
    for (let i = 0; i < clothes.length; i += 1) obj[clothes[i][1]] = []
    for (let i = 0; i < clothes.length; i += 1) obj[clothes[i][1]].push(clothes[i][0])
    //obj = { head : [head1, head2..], face : [face1, face2..]}
    
    for (let i in obj) {
        count *= obj[i].length + 1;
    }
    
    return count - 1;
}
