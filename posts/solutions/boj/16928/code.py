from collections import deque


n, m = map(int, input().split())

d = dict()
for _ in range(n + m):
    u, v = map(int, input().split())
    d[u] = v

q = deque([(1, 0)])
visited = [False] * 101
visited[1] = True
while q:
    x, c = q.popleft()

    if x == 100:
        print(c)
        break

    for v in range(x + 1, min(x + 7, 101)):
        v = d.get(v, v)
        if not visited[v]:
            q.append((v, c + 1))
            visited[v] = True
