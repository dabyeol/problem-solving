n = int(input())
a = list(map(int, input().split()))

d = dict()
for ai in a:
    d[ai] = d.get(ai, 0) + 1

stack = []
array = [-1] * n
for i in reversed(range(n)):
    while stack and d[a[i]] >= d[a[stack[-1]]]:
        stack.pop()

    if stack:
        array[i] = a[stack[-1]]

    stack.append(i)

print(*array)
