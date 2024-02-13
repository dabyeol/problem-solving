from collections import deque


n = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))
m = int(input())
c = list(map(int, input().split()))

d = deque(c)
for ai, bi in zip(a, b):
    if ai == 0:
        d.appendleft(bi)

print(*(list(d)[:m]))
