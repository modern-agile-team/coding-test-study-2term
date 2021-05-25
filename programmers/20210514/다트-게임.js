function solution(dartResult) {
    let temp = dartResult.replace(/[\*+\#+]/g, "");
    let dartScore = temp.replace(/[A-Z]/g, ",");
    dartScore = dartScore.split(",");
    dartScore.pop();
    const dartBonus = temp.match(/[A-Z]/g);
    for (let i = 0; i < dartScore.length; i++) {
        dartScore[i] = Number(dartScore[i]);
        switch (dartBonus[i]) {
            case "S": dartBonus[i] = 1; break;
            case "D": dartBonus[i] = 2; break;
            case "T": dartBonus[i] = 3; break;
        }
    }
    temp = dartResult.replace(/[0-9]/g, "").replace(/[A-Z]/g, "A");
    const dartOption = [];
    let indexOption = -1;
    for (let i of temp) {
        if (i === "A") {
            dartOption.push("")
            indexOption++;
        }
        else dartOption[indexOption] = i;
    }
    console.log(dartScore, dartBonus, dartOption);
    let result = 0;
    let beforeScore = 0;
    for (let i = 0; i < dartScore.length; i++) {
        switch (dartOption[i]) {
            case "": 
                result = result + (dartScore[i] ** dartBonus[i]);
                beforeScore = (dartScore[i] ** dartBonus[i]);
                break;
            case "*": 
                result = result + beforeScore + (dartScore[i] ** dartBonus[i]) * 2;
                // x = 1 + (1 + (2^2)) * 2
                beforeScore = (dartScore[i] ** dartBonus[i]) * 2;
                break;
            case "#":
                result = result - (dartScore[i] ** dartBonus[i]);
                beforeScore = -(dartScore[i] ** dartBonus[i]);
                break;
        }
    }
    return result;
}