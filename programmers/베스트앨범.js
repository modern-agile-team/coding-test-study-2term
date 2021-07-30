function solution(genres, plays) {
  const obj = {};
  for (let i = 0; i < genres.length; i += 1) {
    if (obj[genres[i]]) obj[genres[i]] += plays[i];
    else obj[genres[i]] = plays[i];
  }
  const sortedGenres = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  const genresAndPlays = genres.map((_, i) => [genres[i], plays[i], i]);
  let result = [];
  for (let i = 0; i < sortedGenres.length; i += 1) {
    result = [
      ...result,
      ...genresAndPlays
        .filter((val) => val[0] === sortedGenres[i])
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2)
        .map((val) => val[2]),
    ];
  }
  return result;
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500],
  ),
);
