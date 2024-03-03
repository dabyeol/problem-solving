n = int(input())

memo = [4] * (n + 1)
memo[0] = 0
for i in range(1, n + 1):
    j = 0
    while j**2 <= i:
        memo[i] = min(memo[i], memo[i - j**2] + 1)
        j += 1

print(memo[n])
