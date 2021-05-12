function solution(newID) {
    
    let renewID = newID.toLowerCase()                               //1st step done
                       .replace(/[^\w\d\-\_\.]/g, '')               //2nd step done
                       .replace(/\.{2,}/g, '.')                     //3rd step done
                       .replace(/^\.|\.$/g, '');                    //4th step done
    
    if (!renewID) {
        for(let i = 0; i < newID.length; i++)                       //5th step done
            renewID += "a";
    }
    
    renewID = renewID.slice(0,15)                                   //6th step done
                     .replace(/\.$/g, '');                          
            
    if (renewID.length < 3) {                                       //7th step done
        while (renewID.length < 3)
            renewID += renewID[renewID.length - 1];
    }                                                   
    
    return renewID;                                                 //Test 22, 23 (error)
}

// 5번째 스텝에서 newID의 길이만큼 a를 반환하는거라고 이해했는데 아예 빈칸으로 만들어버리고 길이가 3이 될때까지 a를 추가하는것 같더군요.
// 아래처럼 for문을 없애주니 해결됐습니다.
// if (!renewID) renewID = "a";    //5th step done         