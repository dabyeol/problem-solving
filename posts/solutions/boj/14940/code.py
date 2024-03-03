from collections import deque


n, m = map(int, input().split())

array = []
q = deque()
for i in range(n):
    row = list(map(int, input().split()))

    for j in range(m):
        if row[j] == 2:
            q.append((i, j, 0))
            row[j] = 0
        elif row[j] == 1:
            row[j] = -1

    array.append(row)

directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
while q:
    x, y, d = q.popleft()
    d += 1
    for dx, dy in directions:
        a = x + dx
        b = y + dy
        if 0 <= a < n and 0 <= b < m and array[a][b] == -1:
            q.append((a, b, d))
            array[a][b] = d

for row in array:
    print(*row)
