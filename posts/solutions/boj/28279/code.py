from collections import deque
import sys


n = int(input())

d = deque()
for _ in range(n):
    cmd = list(map(int, sys.stdin.readline().split()))

    if cmd[0] == 1:
        d.appendleft(cmd[1])
    elif cmd[0] == 2:
        d.append(cmd[1])
    elif cmd[0] == 3:
        print(d.popleft() if d else -1)
    elif cmd[0] == 4:
        print(d.pop() if d else -1)
    elif cmd[0] == 5:
        print(len(d))
    elif cmd[0] == 6:
        print(int(not d))
    elif cmd[0] == 7:
        print(d[0] if d else -1)
    elif cmd[0] == 8:
        print(d[-1] if d else -1)
