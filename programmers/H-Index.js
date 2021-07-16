function bubble(arr) {
  for (let i = 0; i < arr.length; i += 1)
    for (let j = 0; j < arr.length - i - 1; j += 1)
      if (arr[j] < arr[j + 1])
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
}

function solution(citations) {
  bubble(citations)
  for (let h = citations[0]; h >= 0; h -= 1) {
    if (citations.filter((value) => value >= h).length >= h) {
      return h;
    }
  }
}
