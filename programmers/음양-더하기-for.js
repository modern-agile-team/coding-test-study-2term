function solution(absolutes, signs) {
    
    const convertArray = [];
    let convertArraySum = 0;
    
    for (let i = 0; i < signs.length; i++)
        signs[i] === true ? convertArray.push(absolutes[i]) : convertArray.push(-(absolutes[i])) ;

    for (let j = 0; j < convertArray.length; j++) convertArraySum += convertArray[j];
    return convertArraySum;
    
}
