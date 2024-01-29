def solution(numLog):
    answer = ""
    for i in range(1, len(numLog)):
        d = numLog[i] - numLog[i - 1]
        if d == 1:
            answer += "w"
        elif d == -1:
            answer += "s"
        elif d == 10:
            answer += "d"
        elif d == -10:
            answer += "a"

    return answer
