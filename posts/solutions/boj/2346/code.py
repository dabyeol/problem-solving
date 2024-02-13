from collections import deque


n = int(input())
array = list(map(int, input().split()))

d = deque(range(1, n + 1))
order = []
while d:
    i = d.popleft()
    p = array[i - 1]
    if p > 0:
        d.rotate(-(p - 1))
    else:
        d.rotate(-p)

    order.append(i)

print(*order)
