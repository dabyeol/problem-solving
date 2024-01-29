def solution(arr):
    answer = 0
    for v in arr:
        prev = 0
        i = 0
        while not v == prev:
            prev = v
            if v >= 50 and v % 2 == 0:
                v //= 2
            elif v < 50 and v % 2 == 1:
                v = v * 2 + 1

            i += 1

        answer = max(answer, i - 1)

    return answer
