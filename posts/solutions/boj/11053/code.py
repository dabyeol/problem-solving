n = int(input())
a = list(map(int, input().split()))

memo = [0] * n
for i in range(n):
    maxlen = 0
    for j in range(i):
        if a[i] > a[j]:
            maxlen = max(maxlen, memo[j])

    memo[i] = maxlen + 1

print(max(memo))
