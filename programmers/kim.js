function solution(seoul){
    var location = seoul.indexOf("Kim");
    var location2 = seoul.lastIndexOf("Kim");
    if( location === location2){
        return "김서방은 " + location + "에 있다."
    }
    else if (location === location2=== -1){
        console.log("김서방은 최소 한 곳에는 있어야 한다.")
    }
    else {
        console.log("김서방은 한 곳에만 있을 수 있다.");
    } 
}
seoul=["서울", '인천' , 'Kim'];
console.log (solution(seoul));