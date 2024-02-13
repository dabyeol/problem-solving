from collections import Counter
import sys


n = int(input())
array = [int(sys.stdin.readline()) for _ in range(n)]

array.sort()
c = Counter(array).most_common(2)
if len(c) > 1 and c[0][1] == c[1][1]:
    m = c[1][0]
else:
    m = c[0][0]

print(round(sum(array) / len(array)))
print(array[len(array) // 2])
print(m)
print(array[-1] - array[0])
