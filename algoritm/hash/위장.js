function solution(clothes) {
  const clothesObj = {};
  let answer = 1;
  clothes.forEach((el) => {
    clothesObj[el[1]] = (clothesObj[el[1]] || 1) + 1;
  });

  for (const i in clothesObj) {
    answer *= clothesObj[i];
  }
  return answer - 1;
}
