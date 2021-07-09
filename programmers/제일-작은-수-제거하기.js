function solution(arr) {
   const min = Math.min(...arr);
   const minIndex =  arr.indexOf(min);
   
   arr.splice(minIndex, 1);
   if (arr.length < 1) arr.push(-1);
   return arr;
}
