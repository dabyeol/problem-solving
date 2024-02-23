n, m = map(int, input().split())
a = list(map(int, input().split()))
c = list(map(int, input().split()))

prev = None
curr = [0] * (sum(c) + 1)
for mn, cn in zip(a, c):
    prev = curr[:]
    for i in range(cn, len(curr)):
        curr[i] = max(curr[i], prev[i - cn] + mn)

for value, memory in enumerate(curr):
    if memory >= m:
        print(value)
        break
