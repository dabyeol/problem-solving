def solution(arr):
    answer = 0
    for e in arr:
        prev = 0
        i = 0
        while not e == prev:
            prev = e
            if e >= 50 and e % 2 == 0:
                e //= 2
            elif e < 50 and e % 2 == 1:
                e = e * 2 + 1

            i += 1

        answer = max(answer, i - 1)

    return answer
