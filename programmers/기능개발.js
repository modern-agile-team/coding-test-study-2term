function solution(progresses, speeds) {
  const dayToFinish = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  for (let i = 0; i < dayToFinish.length; i += 1) {
    for (let j = i + 1; j < dayToFinish.length; j += 1) {
      if (dayToFinish[i] > dayToFinish[j]) dayToFinish[j] = dayToFinish[i];
    }
  }
  return [...new Set(dayToFinish)].map(
    (val) => dayToFinish.filter((v) => v === val).length
  );
}
