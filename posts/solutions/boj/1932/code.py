n = int(input())
tri = [list(map(int, input().split())) for _ in range(n)]

for i in range(1, n):
    for j in range(i + 1):
        left = tri[i - 1][j - 1] if j else 0
        right = tri[i - 1][j] if j < i else 0

        tri[i][j] += max(left, right)


print(max(tri[n - 1]))
