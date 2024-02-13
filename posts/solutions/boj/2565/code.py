n = int(input())
array = [tuple(map(int, input().split())) for _ in range(n)]

b = [r for _, r in sorted(array)]
memo = [0] * n
for i in range(n):
    maxlen = 0
    for j in range(i):
        if b[i] > b[j]:
            maxlen = max(maxlen, memo[j])

    memo[i] = maxlen + 1

print(n - max(memo))
