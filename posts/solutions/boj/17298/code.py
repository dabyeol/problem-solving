n = int(input())
a = list(map(int, input().split()))

stack = []
array = [-1] * n
for i in reversed(range(n)):
    while stack and a[stack[-1]] <= a[i]:
        stack.pop()

    if stack:
        array[i] = a[stack[-1]]

    stack.append(i)

print(*array)
