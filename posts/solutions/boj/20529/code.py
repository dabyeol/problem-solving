from math import inf


t = int(input())

for _ in range(t):
    n = int(input())
    mbti = input().split()

    if n > 32:
        print(0)
    else:
        memo = [[-1] * n for _ in range(n)]
        for i in range(n):
            for j in range(i + 1, n):
                memo[i][j] = sum(a != b for a, b in zip(mbti[i], mbti[j]))

        minvalue = inf
        for a in range(n):
            for b in range(a + 1, n):
                for c in range(b + 1, n):
                    minvalue = min(minvalue, memo[a][b] + memo[b][c] + memo[a][c])

        print(minvalue)
