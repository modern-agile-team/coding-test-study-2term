function solution(s) {
    return s.split(' ').map((Index) => {
                    let answer = '';
                    for (let i = 0; i < Index.length; i++) {
                         if (i % 2) answer += Index[i].toLowerCase();
                         else answer += Index[i].toUpperCase();
                     }
    return answer;
    }).join(' ');
}

