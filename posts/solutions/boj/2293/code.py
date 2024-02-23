n, k = map(int, input().split())
values = [int(input()) for _ in range(n)]

memo = [0] * (k + 1)
memo[0] = 1
for e in values:
    for i in range(e, k + 1):
        memo[i] += memo[i - e]

print(memo[k])
