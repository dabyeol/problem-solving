from collections import deque


def f(m, n, h, tomatoes):
    q = deque()
    for i in range(h):
        for j in range(n):
            for k in range(m):
                if tomatoes[i][j][k] == 1:
                    q.append((i, j, k, 0))

    day = 0
    directions = [(-1, 0, 0), (1, 0, 0), (0, -1, 0), (0, 1, 0), (0, 0, -1), (0, 0, 1)]
    while q:
        x, y, z, d = q.popleft()
        day = d
        for dx, dy, dz in directions:
            a = x + dx
            b = y + dy
            c = z + dz
            if 0 <= a < h and 0 <= b < n and 0 <= c < m and tomatoes[a][b][c] == 0:
                q.append((a, b, c, d + 1))
                tomatoes[a][b][c] = 1

    for layer in tomatoes:
        for row in layer:
            if 0 in row:
                return -1

    return day


m, n, h = map(int, input().split())
tomatoes = [[list(map(int, input().split())) for _ in range(n)] for _ in range(h)]

print(f(m, n, h, tomatoes))
