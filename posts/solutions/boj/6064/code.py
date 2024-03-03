from math import lcm


t = int(input())

for _ in range(t):
    m, n, x, y = map(int, input().split())

    year = -1
    for i in range(x, lcm(m, n) + 1, m):
        if (i - 1) % n + 1 == y:
            year = i

    print(year)
