def solution(n):
    answer = [[0] * n for _ in range(n)]
    i, j = 0, 0
    direction = "r"
    for k in range(1, n**2 + 1):
        answer[i][j] = k
        if direction == "r":
            if j + 1 == n or answer[i][j + 1]:
                direction = "d"
                i += 1
            else:
                j += 1
        elif direction == "d":
            if i + 1 == n or answer[i + 1][j]:
                direction = "l"
                j -= 1
            else:
                i += 1
        elif direction == "l":
            if j == 0 or answer[i][j - 1]:
                direction = "u"
                i -= 1
            else:
                j -= 1
        elif direction == "u":
            if i == 0 or answer[i - 1][j]:
                direction = "r"
                j += 1
            else:
                i -= 1

    return answer
