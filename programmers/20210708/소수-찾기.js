function solution(number) {
    let result = number.includes(2) ? 1 : 0;
    let num = 3;
    let max = number.split("").sort().reverse().join("");
    
    while (max >= num) {
        const numbers = number.split("");
        let strNum = String(num);
        let paperNum = "";
        let bool;
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                bool = true;
                break;
            }
        }
        
        if (num === 3 || num === 5 || num === 7) bool = false;
        
        if (bool) {
            num += 2;
            continue;
        }
        
        for (let i = 0; i < strNum.length; i += 1) {
            if (numbers.includes(strNum[i])) {
                paperNum += strNum[i];
                numbers[numbers.indexOf(strNum[i])] = "";
                continue;
            }
        }
        
        if (paperNum === strNum) {
            result += 1;
        }
        num += 2;
    }
    return result;
}