function solution(seoul) {
    let location = "";
    for(let i=0; i<seoul.length; i++) {
        if (seoul[i] == "Kim")
            location = seoul.indexOf(seoul[i]);
    }
    var answer = '�輭���� '+ location + '�� �ִ�';
    return answer;
}

