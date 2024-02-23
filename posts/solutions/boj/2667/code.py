from collections import deque


n = int(input())
map = [list(map(int, list(input()))) for _ in range(n)]

d = [(-1, 0), (1, 0), (0, -1), (0, 1)]
counts = []
for i in range(n):
    for j in range(n):
        if not map[i][j]:
            continue

        q = deque([(i, j)])
        map[i][j] = 0
        count = 1
        while q:
            x, y = q.popleft()
            for dx, dy in d:
                a = x + dx
                b = y + dy
                if 0 <= a < n and 0 <= b < n and map[a][b]:
                    q.append((a, b))
                    map[a][b] = 0
                    count += 1

        counts.append(count)

print(len(counts))
for count in sorted(counts):
    print(count)
