from collections import deque


n, m = map(int, input().split())
maze = [list(map(int, list(input()))) for _ in range(n)]

d = [(-1, 0), (1, 0), (0, -1), (0, 1)]
q = deque([[0, 0, 1]])
maze[0][0] = 0
while q:
    x, y, c = q.popleft()

    if x == n - 1 and y == m - 1:
        print(c)
        break

    for dx, dy in d:
        a = x + dx
        b = y + dy
        if 0 <= a < n and 0 <= b < m and maze[a][b]:
            q.append([a, b, c + 1])
            maze[a][b] = 0
