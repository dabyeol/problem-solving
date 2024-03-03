from collections import deque
import sys


n = int(input())

x = 0
q = deque()
for _ in range(n):
    op = sys.stdin.readline().split()

    c = op[0]
    if len(op) == 2:
        x = int(op[1])

    match c:
        case "push":
            q.append(x)
        case "pop":
            print(q.popleft() if q else -1)
        case "size":
            print(len(q))
        case "empty":
            print(int(not q))
        case "front":
            print(q[0] if q else -1)
        case "back":
            print(q[-1] if q else -1)
