function solution(pri, loc) {
  const idx = [];
  let print = 0;

  for (let i = 0; i < pri.length; i += 1) idx.push(i);

  let a;
  while (true) {
    if (pri[0] === Math.max.apply(null, pri)) {
      pri.shift();
      a = idx.shift();
      print++;
    } else {
      pri.push(pri.shift());
      idx.push(idx.shift());
    }
    if (a === loc) return print;
  }
}
