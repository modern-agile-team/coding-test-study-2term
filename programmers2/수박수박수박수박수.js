function solution(n) {
    let suBak = "" ;
    for (let i = 1; i <= n; i++) 
        (i % 2) ? suBak += "��" : suBak += "��";
    
    return suBak;

}
