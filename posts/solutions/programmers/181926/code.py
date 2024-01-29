def solution(n, control):
    answer = n
    for c in control:
        if c == "w":
            answer += 1
        elif c == "s":
            answer -= 1
        elif c == "d":
            answer += 10
        elif c == "a":
            answer -= 10

    return answer
