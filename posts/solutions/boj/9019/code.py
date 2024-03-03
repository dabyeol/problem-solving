from collections import deque


t = int(input())

for _ in range(t):
    a, b = map(int, input().split())

    q = deque([(a, "")])
    visited = [False] * 10000
    visited[a] = True
    while q:
        n, c = q.popleft()
        if n == b:
            print(c)
            break

        d = 2 * n % 10000
        if not visited[d]:
            q.append((d, c + "D"))
            visited[d] = True

        s = (n - 1) if n else 9999
        if not visited[s]:
            q.append((s, c + "S"))
            visited[s] = True

        l = n % 1000 * 10 + n // 1000
        if not visited[l]:
            q.append((l, c + "L"))
            visited[l] = True

        r = n % 10 * 1000 + n // 10
        if not visited[r]:
            q.append((r, c + "R"))
            visited[r] = True
