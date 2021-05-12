function solution(d, budget) {
    d.sort(function(a ,b) {
        return a - b;
    })
    for (var result = 0; d[result] <= budget; result++) {
        budget -= d[result];
    }
    return result;
}