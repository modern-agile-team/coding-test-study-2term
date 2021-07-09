function solution(n, arr1, arr2) {
    const passwords = [];
    const results = [];
    
    let sum = 0;
    let str = '';

    for (let i = 0; i < arr1.length; i++) {
        sum = arr1[i] | arr2[i];
        sum = sum.toString(2);
        passwords.push(sum)
    }

    for (let i = 0; i < passwords.length; i++) {
        
        for (let j = 0; j < passwords.length; j++) {
            
	    if (passwords[i][j] === '1') str += '#';
            else if(passwords[i][j] === '0') str += ' ';
        }

        if (passwords[i].length !== n) {
           
            for (let k = 0; k < n - passwords[i].length; k++) {
                str = ' ' + str;
            }
        }
        results.push(str);
        str = ''
    }
   return results;
}
