n = int(input())

bg = [[0] * 100 for _ in range(100)]
for _ in range(n):
    a, b = map(int, input().split())
    for i in range(a, a + 10):
        for j in range(b, b + 10):
            bg[i][j] = 1

print(sum(sum(row) for row in bg))
