function solution(numbers, hand) {
    const key = {
        1 : [0, 0], 2 : [0, 1], 3 : [0, 2],
        4 : [1, 0], 5 : [1, 1], 6 : [1, 2],
        7 : [2, 0], 8 : [2, 1], 9 : [2, 2],
        0 : [3, 1]
    }

    let [result, leftHand, rightHand] = [ "", [3, 0], [3, 2] ];
    
    function path(key, num, leftHand, rightHand, hand) {
        const leftPath =  Math.abs( leftHand[0] - key[num][0] ) + Math.abs( leftHand[1] - key[num][1] ),
              rightPath = Math.abs( rightHand[0] - key[num][0] ) + Math.abs( rightHand[1] - key[num][1] );
        
        if (leftPath === rightPath) return hand === "left" ? "L" : "R";
        return leftPath < rightPath ? "L" : "R";
    }
    
    for (let num of numbers) {
        if (num % 3 === 1) {                                                                                    
            result += "L";
            leftHand = key[num];
        } else if (num % 3 === 0 && num !== 0) {                                                                
            result += "R";      
            rightHand = key[num];
        } else if (num % 3 === 2 || num === 0) {
            result += path(key, num, leftHand, rightHand, hand);
            path(key, num, leftHand, rightHand, hand) === "L" ? leftHand = key[num] : rightHand = key[num];
        }
    }
    return result;
}