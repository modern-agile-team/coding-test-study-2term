function solution(s) {
    const Sleng = s.length;
    const Center = parseInt(Sleng / 2);
    if ( Sleng % 2 === 0) {
        return s.substr(Center-1,2);
    }
    else 
        return s.slice(Center,Center + 1);


}
