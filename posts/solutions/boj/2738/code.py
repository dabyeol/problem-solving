n, m = map(int, input().split())

matrix = [[0] * m for _ in range(n)]
for _ in range(2):
    for row in matrix:
        for i, v in enumerate(map(int, input().split())):
            row[i] += v

for row in matrix:
    print(*row)
