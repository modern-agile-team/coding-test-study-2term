<<<<<<< HEAD
<<<<<<< HEAD
function solution(id) {
    const lowerId = id.toLowerCase()
    let newId = lowerId.replace(/[^-_.a-z0-9]/g,'').replace(/\.{2,}/gm,'.').replace(/^\.|\.$/g,'')
    if (newId.length === 0) {
        newId = 'a'
    }
    //5단계 -> newId 6~7단계 answer
    let answer = newId.slice(0, 15).replace(/\.$/g,'')
    const lastword = answer.charAt(answer.length - 1);
    if (answer.length <= 2) {
        for (let i = answer.length; i < 3; i++) {
            answer += lastword
        }
    }
    return answer
=======
=======
>>>>>>> dfb4193728bd5f6c04fd7e036ad2f9c430ea8188
function solution(new_id) {
    new_id = new_id
        .toLowerCase()
        .replace(/[^\w\.\-]/g, '')
        .replace(/[\.]{2,}/g, '.')
        .replace(/^\./, '')
        .replace(/\.$/, '');
    
    if (!new_id)  new_id = "a";
    if (new_id.length >= 16) {
        new_id = new_id
            .slice(0, 15)
            .replace(/\.$/, '');
    }
    if (new_id.length <= 2) {
      while (new_id.length < 3) {
        new_id = new_id + new_id[new_id.length -1];
     } 
   } 
   return new_id;
<<<<<<< HEAD
>>>>>>> dfb4193728bd5f6c04fd7e036ad2f9c430ea8188
=======
>>>>>>> dfb4193728bd5f6c04fd7e036ad2f9c430ea8188
}
