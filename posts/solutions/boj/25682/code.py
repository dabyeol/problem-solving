n, m, k = map(int, input().split())
board = [input() for _ in range(n)]

prefix_sum = [[0] * (m + 1) for _ in range(n + 1)]
for i in range(1, n + 1):
    for j in range(1, m + 1):
        c = "B" if (i + j) % 2 else "W"
        prefix_sum[i][j] = (
            prefix_sum[i - 1][j]
            + prefix_sum[i][j - 1]
            - prefix_sum[i - 1][j - 1]
            + (board[i - 1][j - 1] == c)
        )

area = k**2
minvalue = area
for i in range(n + 1 - k):
    for j in range(m + 1 - k):
        sum = (
            prefix_sum[i + k][j + k]
            - prefix_sum[i][j + k]
            - prefix_sum[i + k][j]
            + prefix_sum[i][j]
        )
        minvalue = min(minvalue, sum, area - sum)

print(minvalue)
