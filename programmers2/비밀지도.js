function solution(n, arr1, arr2) {
    const orArr = [];
    for (let i = 0; i < n; i++) {
        let cal = arr1[i] | arr2[i];
        cal = cal.toString(2).padStart(n, '0');
        orArr.push(cal.replace(/1/g, '#').replace(/0/g, ' '));
    }
    return orArr;
}
