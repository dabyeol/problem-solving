import sys


m = int(input())

x = 0
s = set()
for _ in range(m):
    op = sys.stdin.readline().split()

    c = op[0]
    if len(op) == 2:
        x = int(op[1])

    match c:
        case "add":
            s.add(x)
        case "remove":
            s.discard(x)
        case "check":
            print(int(x in s))
        case "toggle":
            s ^= {x}
        case "all":
            s = set(range(1, 21))
        case empty:
            s = set()
