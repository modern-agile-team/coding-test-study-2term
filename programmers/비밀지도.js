function solution(n, arr1, arr2) {
    
    const output = [];
    let result = [];
    
    for (let i = 0; i < n; i++) {
        arr1[i] = arr1[i].toString(2);
        arr2[i] = arr2[i].toString(2);
        if (arr1[i].length < n) {
            while (arr1[i].length < n) arr1[i] = 0 + arr1[i];
        }
        if (arr2[i].length < n) {
            while (arr2[i].length < n) arr2[i] = 0 + arr2[i];
        }
        for (let j = 0; j < n; j++) {
            if (arr1[i][j] === '0' && arr2[i][j] === '0') result.push(' ');
            if (arr1[i][j] === '1' || arr2[i][j] === '1') result.push('#')
        }
    }
    result = result.join('');
    for (let i = 0; i < n; i++) {
        output.push(result.substr(i * n, n))
    }
    return output;
}