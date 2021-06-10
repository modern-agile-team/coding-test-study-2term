function solution(new_id) {
    new_id = new_id
    .toLowerCase()
    .replace(/[^\w-.)]/g, '')
    .replace(/\.{1,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15).replace(/\.$/, '');
    
    const len = new_id.length;
    if (len > 2) return new_id;
    return new_id + new_id[len - 1].repeat(3 - len);
    
}
