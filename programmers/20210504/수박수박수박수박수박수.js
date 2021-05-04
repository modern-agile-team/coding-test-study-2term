function solution(n) {
    return n % 2 ? "수박".repeat(n / 2) + "수" : "수박".repeat(n / 2);
}