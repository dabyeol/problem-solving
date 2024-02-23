from collections import deque
import sys


t = int(input())

d = [(-1, 0), (1, 0), (0, -1), (0, 1)]
for _ in range(t):
    m, n, k = map(int, input().split())

    plot = [[0] * m for _ in range(n)]
    for _ in range(k):
        x, y = map(int, sys.stdin.readline().split())

        plot[y][x] = 1

    count = 0
    for i in range(n):
        for j in range(m):
            if not plot[i][j]:
                continue

            q = deque([(i, j)])
            plot[i][j] = 0
            while q:
                x, y = q.popleft()
                for dx, dy in d:
                    a = x + dx
                    b = y + dy
                    if 0 <= a < n and 0 <= b < m and plot[a][b]:
                        q.append((a, b))
                        plot[a][b] = 0

            count += 1

    print(count)
