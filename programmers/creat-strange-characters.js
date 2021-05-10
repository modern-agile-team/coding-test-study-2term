function solution(s) {
    let altrnChar; 
    let altrnCollection;
    s = s.split(" ");
    for (let i = 0; i < s.length; i++) {
        altrnCollection = [];
        for (let j = 0; j < s[i].length; j++) {
            if (j % 2 === 0) {
                altrnChar = s[i][j].toUpperCase();
            } else {
                altrnChar = s[i][j].toLowerCase();
            }
        altrnCollection.push(altrnChar);
        }
        altrnCollection = altrnCollection.join("");
        if (i === s.length -1) {
            s[i] = altrnCollection;
        } else {
            s[i] = altrnCollection+(" ");
        }
    }
    return s.join("");
}
const s = "try hello world";
solution(s);