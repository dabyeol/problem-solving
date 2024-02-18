n, k = map(int, input().split())
a = [int(input()) for _ in range(n)]

count = 0
for ai in reversed(a):
    count += k // ai
    k %= ai

print(count)
