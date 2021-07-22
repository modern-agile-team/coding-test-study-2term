function solution(prior, loc) {
  const print = prior.map((el, index) => {
    return {
      printer: el,
      index: index,
    };
  });
  const result = [];

  while (print.length > 0) {
    const max = Math.max(...prior);
    if (print[0].printer < max) {
      print.push(print[0]);
      print.shift();
    } else if (print[0].printer === max) {
      result.push(print[0]);
      print.shift();
      prior.splice(prior.indexOf(Math.max(...prior)), 1);
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i].index === loc) return i + 1;
  }
}
