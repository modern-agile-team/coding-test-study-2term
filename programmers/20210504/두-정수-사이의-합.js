function solution(a, b) {
    if (Math.abs(a - b) % 2 == 0) {
        return ((a + b) * (Math.abs(a - b) + 1)) / 2
    }
    else {
        return (a + b) * ((Math.abs(a - b) / 2) + 0.5)
    }
}