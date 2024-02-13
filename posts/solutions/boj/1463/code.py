n = int(input())

memo = [0] * (n + 1)
for i in range(2, n + 1):
    prev = memo[i - 1]
    if i % 3 == 0:
        prev = min(prev, memo[i // 3])
    if i % 2 == 0:
        prev = min(prev, memo[i // 2])

    memo[i] = prev + 1

print(memo[n])
