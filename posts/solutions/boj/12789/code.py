n = int(input())
array = list(map(int, input().split()))

stack = []
number = 1
for v in array:
    if v == number:
        number += 1
    else:
        stack.append(v)

    while stack and stack[-1] == number:
        stack.pop()
        number += 1

print("Sad" if stack else "Nice")
