n = int(input())

prev = None
curr = [1] * 10
curr[0] = 0
for _ in range(n - 1):
    prev = curr[:]
    curr[0] = prev[1]
    curr[9] = prev[8]
    for i in range(1, 9):
        curr[i] = (prev[i - 1] + prev[i + 1]) % 1_000_000_000

print(sum(curr) % 1_000_000_000)
