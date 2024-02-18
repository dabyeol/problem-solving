n = int(input())
array = [tuple(map(int, input().split())) for _ in range(n)]

memo = [[0] * (n + 1) for _ in range(n)]
for length in range(2, n + 1):
    for start in range(0, n - length + 1):
        stop = start + length
        memo[start][stop] = min(
            memo[start][x]
            + memo[x][stop]
            + array[start][0] * array[x][0] * array[stop - 1][1]
            for x in range(start + 1, stop)
        )

print(memo[0][n])
