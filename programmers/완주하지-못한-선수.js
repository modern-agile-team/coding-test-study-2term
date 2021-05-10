function solution(participants, completions) {
  let count = {}
  let answer = ``
  for(let participant of participants) {
    if (participant in count) count[participant] += 1;
    else count[participant] = 1;
    }
    
  for(let completion of completions) {
    count[completion] -= 1
    }
    
  for(let participant of participants) {
    if(count[participant] >= 1) answer = participant
    }
  return answer
}
