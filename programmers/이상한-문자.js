function solution(s) {

    s = s.split(" ");
    const sWrap = [...s];   
    const len = sWrap.length;
    //const sWrap = [...(s.split(" "))];  이것도 가능한것 같은데 어떤식으로 표현하는게 나을지 여쭤보고싶습니다.            
    const result = new Array; 
    for (let i = 0; i < len; i++) {
        for(let j = 0; j < sWrap[i].length; j++) {
            !(j % 2) ? result.push(sWrap[i][j].toUpperCase()) : result.push(sWrap[i][j].toLowerCase());
        } if (i < sWrap.length - 1) result.push(" ");
    }    
    return result.join("");
}


// 아래의 코드는 같은 코드를 for문만 for in문으로 바꿨습니다. 근데 코드 실행시간이 더 오래 걸리더라구요. 혹시 어떤 차이가 있는건지 여쭤보고싶어요

// function solution(s) {

//     const sWrap = [...(s.split(" "))];
//     const result = new Array;
  
//     for (let i in sWrap) {
//         for (let j in sWrap[i]) {
//             !(j % 2) ? result.push(sWrap[i][j].toUpperCase()) : result.push(sWrap[i][j].toLowerCase());
//         }
//         if(i < sWrap.length - 1) result.push(" ");
//     }
//     return result.join("")
// }  