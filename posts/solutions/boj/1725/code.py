import sys


n = int(input())
h = [int(sys.stdin.readline()) for _ in range(n)]

h.append(0)
stack = []
maxvalue = 0
for i, hi in enumerate(h):
    right = i
    while stack and h[stack[-1]] > hi:
        height = h[stack.pop()]
        left = stack[-1] + 1 if stack else 0
        maxvalue = max(maxvalue, (right - left) * height)

    stack.append(i)

print(maxvalue)
