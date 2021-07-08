function solution(brown, yellow) {
  for (let height = 0; height <= yellow; height += 1) {
    if (yellow % height === 0) {
      const width = yellow / height;
      if (width >= height) {
        if (width * 2 + height * 2 + 4 === brown) {
          return [width + 2, height + 2];
        }
      }
    }
  }
}
