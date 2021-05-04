function solution(s) {
  let p = 0, y = 0;
  s.split('').forEach((val) => {
    val = val.toLowerCase()
    if (val === 'p') p += 1;
    if (val === 'y') y += 1;
  })
  return (p === y);
}