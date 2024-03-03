t = int(input())

memo = [0] * 11
memo[1:4] = [1, 1, 1]
for i in range(2, 11):
    memo[i] += sum(memo[max(i - 3, 0) : i])

for _ in range(t):
    n = int(input())

    print(memo[n])
