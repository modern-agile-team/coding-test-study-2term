function solution(records) {
  const usersName = {};

  records.forEach((record) => {
    const [command, uid, nickname] = record.split(' ');
    
    if (command === 'Enter' || command === 'Change') usersName[uid] = nickname;
  });

  return records.flatMap((record) => {
    const [command, uid, nickname] = record.split(' ');

    if (command === 'Enter') return [`${usersName[uid]}님이 들어왔습니다.`];
    if (command === 'Leave') return [`${usersName[uid]}님이 나갔습니다.`];
    return [];
  });
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));
