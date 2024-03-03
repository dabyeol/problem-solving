import sys


n = int(input())

x = 0
stack = []
for _ in range(n):
    op = sys.stdin.readline().split()

    c = op[0]
    if len(op) == 2:
        x = int(op[1])

    match c:
        case "push":
            stack.append(x)
        case "pop":
            print(stack.pop() if stack else -1)
        case "size":
            print(len(stack))
        case "empty":
            print(int(not stack))
        case "top":
            print(stack[-1] if stack else -1)
