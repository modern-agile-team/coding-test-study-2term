def solution(seoul):
    answer = ''
    for i in range(len(seoul)):
        if seoul[i] == "Kim":
            answer = "김서방은 %d에 있다"%i
    return answer

seoul = ["Jane","Kim"]
print(solution(seoul))