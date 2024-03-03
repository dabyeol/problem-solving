from collections import deque


n, k = map(int, input().split())

deq = deque([(0, n)])
visited = [False] * (max(n, k) + 2)
while deq:
    c, x = deq.popleft()

    if x == k:
        print(c)
        break

    a = 2 * x
    if 0 <= a < len(visited) and not visited[a]:
        deq.appendleft((c, a))
        visited[a] = True

    for a in (x - 1, x + 1):
        if 0 <= a < len(visited) and not visited[a]:
            deq.append((c + 1, a))
            visited[a] = True
