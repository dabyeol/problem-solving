from math import comb


n, m = map(int, input().split())
a = list(map(int, input().split()))

prefix_sum = [e % m for e in a]
for i in range(1, n):
    prefix_sum[i] = (prefix_sum[i] + prefix_sum[i - 1]) % m

array = [0] * m
array[0] = 1
for p in prefix_sum:
    array[p] += 1

count = 0
for e in array:
    count += comb(e, 2)

print(count)
