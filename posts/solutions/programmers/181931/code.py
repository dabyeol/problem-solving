def solution(a, d, included):
    answer = 0
    for i, f in enumerate(included):
        if f:
            answer += a + d * i

    return answer
