from math import inf


n, m, b = map(int, input().split())
array = [list(map(int, input().split())) for _ in range(n)]

minheight = min(min(row) for row in array)
maxheight = max(max(row) for row in array)
t, h = inf, 0
for height in range(minheight, maxheight + 1):
    blocks = b
    time = 0
    for row in array:
        for e in row:
            blocks += e - height
            if e <= height:
                time += height - e
            else:
                time += (e - height) * 2

    if blocks < 0:
        break

    if time <= t:
        t = time
        h = max(h, height)

print(t, h)
