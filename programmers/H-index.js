function bubble(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      if (arr[j] < arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

function solution(citations) {
  bubble(citations);

  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}
