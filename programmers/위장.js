function solution(clothes) {
  const obj = {};
  clothes.forEach((val) => {
    if (obj[val[1]]) obj[val[1]] += 1;
    else obj[val[1]] = 1;
  });
  return Object
    .values(obj)
    .reduce((acc, val) => acc * (val + 1), 1) - 1;
}

console.log(
  solution([
    ['crowmask', 'face'],
    ['bluesunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ]),
);
