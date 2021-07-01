function solution(s) {
  const tuples = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'));
  
  return tuples.sort((a, b) => a.length - b.length).reduce((acc, tuple, index) => {
    if (index === 0) return tuple;
    return [...acc, tuple.find((val) => !acc.includes(val))];
  }, []);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
