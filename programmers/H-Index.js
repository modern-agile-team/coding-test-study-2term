function bubble(arr) {
  for (let i = 0; i < arr.length; i += 1)
    for (let j = 0; j < arr.length - i - 1; j += 1)
      if (arr[j] < arr[j + 1])
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
}
function merge(a, b) {
  let arr = [];
  while (a.length && b.length) {
    if (a[0] < b[0]) {
      arr.push(b.shift());
    } else {
      arr.push(a.shift())
    }
  }
  arr = [...arr, ...a, ...b];
  return arr;
}
function divide(arr) {
  if (arr.length < 2) return arr;
  const left = divide(arr.slice(0, Math.floor(arr.length / 2)));
  const right = divide(arr.slice(Math.floor(arr.length / 2)));
  return merge(left, right);
}

function solution(citations) {
  // bubble(citations);
  citations = divide(citations);
  for (let h = citations[0]; h >= 0; h -= 1) {
    if (citations.filter((value) => value >= h).length >= h) {
      return h;
    }
  }
}
