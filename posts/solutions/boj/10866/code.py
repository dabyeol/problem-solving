from collections import deque
import sys


n = int(input())

x = 0
d = deque()
for _ in range(n):
    op = sys.stdin.readline().split()

    c = op[0]
    if len(op) == 2:
        x = int(op[1])

    match c:
        case "push_front":
            d.appendleft(x)
        case "push_back":
            d.append(x)
        case "pop_front":
            print(d.popleft() if d else -1)
        case "pop_back":
            print(d.pop() if d else -1)
        case "size":
            print(len(d))
        case "empty":
            print(int(not d))
        case "front":
            print(d[0] if d else -1)
        case "back":
            print(d[-1] if d else -1)
