def solution(rsp):
    answer = ""
    for c in rsp:
        if c == "2":
            answer += "0"
        elif c == "0":
            answer += "5"
        else:
            answer += "2"

    return answer
