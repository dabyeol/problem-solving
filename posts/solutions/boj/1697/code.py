from collections import deque


n, k = map(int, input().split())

q = deque([[n, 0]])
visited = [False] * (max(n, k) + 2)
visited[n] = True
while q:
    x, s = q.popleft()

    if x == k:
        print(s)
        break

    for a in (x - 1, x + 1, 2 * x):
        if 0 <= a < len(visited) and not visited[a]:
            q.append([a, s + 1])
            visited[a] = True
