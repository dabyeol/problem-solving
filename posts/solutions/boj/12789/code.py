n = int(input())
array = list(map(int, input().split()))

stack = []
number = 1
for e in array:
    if e == number:
        number += 1
    else:
        stack.append(e)

    while stack and stack[-1] == number:
        stack.pop()
        number += 1

print("Sad" if stack else "Nice")
