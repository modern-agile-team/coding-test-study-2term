function solution(numbers) {
  const answer = numbers.map((el) => el + ''); // [6, 10. 2] => ['6', '10', '2']
  answer.sort((a, b) => b + a - (a + b)); // 	[ '6', '2', '10' ]
  return answer[0] === '0' ? '0' : answer.join('');
}
