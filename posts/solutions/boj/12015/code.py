from bisect import bisect_left


n = int(input())
a = list(map(int, input().split()))

stack = [a[0]]
for i in range(1, n):
    if a[i] > stack[-1]:
        stack.append(a[i])
    else:
        stack[bisect_left(stack, a[i])] = a[i]

print(len(stack))
