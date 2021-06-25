function getConvertableWords(src, words) {
  return words.filter((dst) => {
    const srcArr = src.split('');
    const dstArr = dst.split('');
    return (
      srcArr.filter((value, index) => dstArr[index] !== value).length === 1
    );
  });
}

function solution(begin, target, words) {
  let queue = [begin];
  const costs = words.reduce((acc, val) => {
    acc[val] = 0;
    return acc;
  }, {});
  costs[begin] = 0;

  while (queue.length !== 0) {
    const word = queue.shift();
    const cost = costs[word];
    if (word === target) return cost;
    let convertableWords = getConvertableWords(word, words);
    convertableWords = convertableWords.filter(
      (convertableWord) => costs[convertableWord] === 0
    );
    convertableWords.forEach((convertableWord) => {
      costs[convertableWord] = cost + 1;
    });
    queue = [...queue, ...convertableWords];
  }
  return 0;
}

// console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]))
// console.log(getConvertableWords('aaa', ['aab']))
