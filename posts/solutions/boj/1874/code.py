import sys


n = int(input())
array = [int(sys.stdin.readline()) for _ in range(n)]

i = 1
stack = []
answer = []
for e in array:
    while i <= e:
        stack.append(i)
        answer.append("+")
        i += 1

    if stack and stack[-1] == e:
        stack.pop()
        answer.append("-")
    else:
        print("NO")
        break
else:
    for c in answer:
        print(c)
