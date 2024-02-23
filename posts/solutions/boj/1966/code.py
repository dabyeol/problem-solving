from collections import deque


t = int(input())

for _ in range(t):
    n, m = map(int, input().split())
    array = list(map(int, input().split()))

    q = deque(enumerate(array))
    count = 0
    for e in sorted(array, reverse=True):
        while q[0][1] != e:
            q.rotate(-1)

        i, _ = q.popleft()
        count += 1
        if i == m:
            print(count)
            break
