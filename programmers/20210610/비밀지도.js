function solution(n, arr1, arr2) {
    const myArray = []
    for (let i = 0; i < n; i++) {
        let temp = ""
        for (let j = 0; j < n; j++) {
            temp = ((arr1[i] % 2) + (arr2[i] % 2)) + temp;
            arr1[i] = parseInt(arr1[i] / 2);
            arr2[i] = parseInt(arr2[i] / 2);
        }
        myArray.push(temp);
        myArray[i] = myArray[i].replace(/0/g, " ").replace(/[1-2]/g, "#");
    }
    return myArray;
}