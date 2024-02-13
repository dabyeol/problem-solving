import sys


n = int(input())
array = [int(sys.stdin.readline()) for _ in range(n)]

array.sort()
for v in array:
    print(v)
