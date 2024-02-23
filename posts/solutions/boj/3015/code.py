import sys


n = int(input())
array = [int(sys.stdin.readline()) for _ in range(n)]

stack = []
count = 0
for height in array:
    while stack and stack[-1][0] < height:
        _, c = stack.pop()
        count += c

    if stack and stack[-1][0] == height:
        h, c = stack.pop()
        count += c + (1 if stack else 0)
        stack.append((h, c + 1))
    else:
        count += 1 if stack else 0
        stack.append((height, 1))

print(count)
