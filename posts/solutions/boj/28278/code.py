import sys


n = int(input())

x = 0
stack = []
for _ in range(n):
    op = list(map(int, sys.stdin.readline().split()))

    c = op[0]
    if len(op) == 2:
        x = op[1]

    match c:
        case 1:
            stack.append(x)
        case 2:
            print(stack.pop() if stack else -1)
        case 3:
            print(len(stack))
        case 4:
            print(int(not stack))
        case 5:
            print(stack[-1] if stack else -1)
