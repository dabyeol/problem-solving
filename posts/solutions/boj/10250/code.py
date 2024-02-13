from math import ceil


t = int(input())

for _ in range(t):
    h, w, n = map(int, input().split())

    y = (n - 1) % h + 1
    x = ceil(n / h)

    print(y * 100 + x)
