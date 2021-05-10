function rankswitch(n) {
    switch(n) {
            case 0 :
                return 6
                break
            case 1 : 
                return 6
                break
            case 2 : 
                return 5
                break
            case 3 : 
                return 4
                break
            case 4 : 
                return 3
                break
            case 5 : 
                return 2
                break
            default :
                return 1
            }
}

function solution(lottos, win_nums) {
    let matchednum = 0 //확인된 번호중 맞는 번호 갯수
    let unknown = 0 //미확인번호 갯수
    
    for(let lottonum of lottos) {
        if(win_nums.indexOf(lottonum) !== -1) matchednum += 1 //맞는번호가있을때 
        else if(lottonum === 0) unknown += 1 //모르는번호가 있을때(0이 있을때)
    }  
    let best = matchednum + unknown
    let worst = matchednum 
    const answer = [rankswitch(best), rankswitch(worst)]
    return answer 
    }     
