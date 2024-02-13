import sys


n = int(input())

array = [0] * 10001
for _ in range(n):
    array[int(sys.stdin.readline())] += 1

for i, c in enumerate(array):
    for _ in range(c):
        print(i)
