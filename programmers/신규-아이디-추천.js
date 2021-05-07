function solution(new_id) {
  new_id = new_id.replace(/([A-Z])/g, (_, p1) => p1.toLowerCase());
  new_id = new_id.replace(/[^a-z\d-_\.]/g, '');
  while (/(\.\.\.|\.\.)/g.test(new_id)) new_id = new_id.replace(/(\.\.\.|\.\.)/g, '.');
  new_id = new_id.replace(/^\./, '');
  new_id = new_id.replace(/^$/, 'a');
  new_id = new_id.replace(/(?<=^.{15}).*/, '');
  new_id = new_id.replace(/\.$/, '');
  while (/(^.{1,2}$)/.test(new_id)) new_id = new_id.replace(/(^.{1,2}$)/, (_, p1) => p1 + p1.slice(-1));
  return new_id;
}

console.log(solution('z-+.^.'));