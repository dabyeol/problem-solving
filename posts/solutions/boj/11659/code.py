import sys


n, m = map(int, input().split())
array = list(map(int, input().split()))

prefix_sum = [0]
for v in array:
    prefix_sum.append(prefix_sum[-1] + v)

for _ in range(m):
    i, j = map(int, sys.stdin.readline().split())

    print(prefix_sum[j] - prefix_sum[i - 1])
