function solution(a, b) {
    let sum = 0;
    let i = 0;
    if( b < a) {
        for( i = b; i < a + 1; i++){
            sum += i;
        }
    }
    else {
        for( i = a; i < b + 1; i++){
            sum += i;
    }
    }
  return sum;
}
