from collections import deque


n, m = map(int, input().split())
array = [list(map(int, list(input()))) for _ in range(n)]

d = [(-1, 0), (1, 0), (0, -1), (0, 1)]
count = -1
q = deque([(0, 0, 0, 1)])
visited = [[[False] * 2 for _ in range(m)] for _ in range(n)]
visited[0][0][0] = True
while q:
    x, y, f, c = q.popleft()

    if x == n - 1 and y == m - 1:
        count = c
        break

    for dx, dy in d:
        a = x + dx
        b = y + dy
        if 0 <= a < n and 0 <= b < m and not visited[a][b][f]:
            if array[a][b] == 0:
                q.append((a, b, f, c + 1))
                visited[a][b][f] = True
            elif not f and not visited[a][b][1]:
                q.append((a, b, 1, c + 1))
                visited[a][b][1] = True

print(count)
