from itertools import combinations
from math import inf


n = int(input())
s = [list(map(int, input().split())) for _ in range(n)]

stats = []
for numbers in combinations(range(n), n // 2):
    stat = 0
    for i in numbers:
        for j in numbers:
            stat += s[i][j]

    stats.append(stat)

minstat = inf
for i in range(len(stats) // 2):
    minstat = min(minstat, abs(stats[i] - stats[len(stats) - 1 - i]))

print(minstat)
