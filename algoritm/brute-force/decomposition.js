const N = parseInt(require("fs").readFileSync("/dev/stdin").toString());
function decomposition(N) {
  let result = 0;
  for (let i = 1; i < N + 1; i++) {
    const str = String(i);
    let sum = 0;
    for (let j = 0; j < str.length; j++) {
      sum += Number(str[j]);
    }
    if (N === i + sum) {
      result = i;
      break;
    }
  }
  return result ? result : 0;
}

console.log(decomposition(N));
