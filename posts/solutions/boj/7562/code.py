from collections import deque


t = int(input())

d = [(-2, -1), (-2, 1), (-1, -2), (-1, 2), (1, -2), (1, 2), (2, -1), (2, 1)]
for _ in range(t):
    l = int(input())
    x1, y1 = map(int, input().split())
    x2, y2 = map(int, input().split())

    q = deque([[x1, y1, 0]])
    visited = [[False] * l for _ in range(l)]
    visited[x1][y1] = True
    while q:
        x, y, c = q.popleft()

        if x == x2 and y == y2:
            print(c)
            break

        for dx, dy in d:
            a = x + dx
            b = y + dy
            if 0 <= a < l and 0 <= b < l and not visited[a][b]:
                q.append([a, b, c + 1])
                visited[a][b] = True
