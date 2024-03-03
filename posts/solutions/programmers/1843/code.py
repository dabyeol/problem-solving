from math import ceil, inf


def solution(arr):
    n = ceil(len(arr) / 2)
    memo = [[[inf, -inf] for _ in range(n + 1)] for _ in range(n)]
    for i in range(n):
        memo[i][i + 1] = [int(arr[i * 2])] * 2

    for i in range(2, n + 1):
        for start in range(n - i + 1):
            end = start + i
            for x in range(start + 1, end):
                if arr[x * 2 - 1] == "+":
                    memo[start][end][0] = min(
                        memo[start][end][0], memo[start][x][0] + memo[x][end][0]
                    )
                    memo[start][end][1] = max(
                        memo[start][end][1], memo[start][x][1] + memo[x][end][1]
                    )
                else:
                    memo[start][end][0] = min(
                        memo[start][end][0], memo[start][x][0] - memo[x][end][1]
                    )
                    memo[start][end][1] = max(
                        memo[start][end][1], memo[start][x][1] - memo[x][end][0]
                    )

    return memo[0][n][1]
