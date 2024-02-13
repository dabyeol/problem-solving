n = int(input())
a = list(map(int, input().split()))

memo1 = [0] * n
for i in range(n):
    maxlen = 0
    for j in range(i):
        if a[i] > a[j]:
            maxlen = max(maxlen, memo1[j])

    memo1[i] = maxlen + 1

memo2 = [0] * n
for i in reversed(range(n)):
    maxlen = 0
    for j in range(i + 1, n):
        if a[i] > a[j]:
            maxlen = max(maxlen, memo2[j])

    memo2[i] = maxlen + 1

print(max(l1 + l2 for l1, l2 in zip(memo1, memo2)) - 1)
