isprime = [True] * 1000001
isprime[0:2] = [False, False]
for i in range(2, 1001):
    if isprime[i]:
        for j in range(i * 2, len(isprime), i):
            isprime[j] = False

m, n = map(int, input().split())

for i in range(m, n + 1):
    if isprime[i]:
        print(i)
