function solution(seoul) {
  var answer = seoul.findIndex((v) => (v === "Kim"))
  return `김서방은 ${answer}에 있다`;
}