def solution(n):
    i = 1
    answer = n
    while i <= answer:
        if i % 3 == 0 or "3" in str(i):
            answer += 1

        i += 1

    return answer
