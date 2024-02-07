n, m = map(int, input().split())

arr = list(range(1, n + 1))
for _ in range(m):
    i, j = map(int, input().split())
    arr[i - 1 : j] = arr[i - 1 : j][::-1]

print(*arr)
