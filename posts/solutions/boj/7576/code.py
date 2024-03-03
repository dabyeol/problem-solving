from collections import deque


def f(m, n, tomatoes):
    q = deque()
    for i in range(n):
        for j in range(m):
            if tomatoes[i][j] == 1:
                q.append((i, j, 0))

    day = 0
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    while q:
        x, y, d = q.popleft()
        day = d
        for dx, dy in directions:
            a = x + dx
            b = y + dy
            if 0 <= a < n and 0 <= b < m and tomatoes[a][b] == 0:
                q.append((a, b, d + 1))
                tomatoes[a][b] = 1

    for row in tomatoes:
        if 0 in row:
            return -1

    return day


m, n = map(int, input().split())
tomatoes = [list(map(int, input().split())) for _ in range(n)]

print(f(m, n, tomatoes))
