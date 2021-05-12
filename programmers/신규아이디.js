function solution(newID) {
    
    let renewID = newID.toLowerCase()                               //done
                       .replace(/[^\w\d\-\_\.]/g, '')               //done
                       .replace(/\.{2,}/g, '.')                     //done
                       .replace(/^\.|\.$/g, '');                    //done
    
    if (!renewID) {
        for(let i = 0; i < newID.length; i++)                       //done
            renewID += "a";
    }
    
    if (renewID.length > 15) {                                      //done
        renewID = renewID.slice(0,15);
    }
    
    if (renewID[14] === ".") renewID = renewID.replace(/\.$/g, ''); //done
            
    if (renewID.length < 3) {                                       //done
        while (renewID.length < 3)
            renewID += renewID[renewID.length - 1];
    }                                                   
    
    return renewID;                                                 //Test 22, 23 (error)
}

const new_id = "...!@BaT#*..y.abcdefghijklm";
console.log(solution(new_id));