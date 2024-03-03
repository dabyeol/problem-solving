from collections import deque
import sys


n = int(input())

x = 0
d = deque()
for _ in range(n):
    op = list(map(int, sys.stdin.readline().split()))

    c = op[0]
    if len(op) == 2:
        x = op[1]

    match c:
        case 1:
            d.appendleft(x)
        case 2:
            d.append(x)
        case 3:
            print(d.popleft() if d else -1)
        case 4:
            print(d.pop() if d else -1)
        case 5:
            print(len(d))
        case 6:
            print(int(not d))
        case 7:
            print(d[0] if d else -1)
        case 8:
            print(d[-1] if d else -1)
