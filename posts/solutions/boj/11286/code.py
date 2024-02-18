import heapq
import sys


n = int(input())

q = []
for _ in range(n):
    x = int(sys.stdin.readline())

    if x != 0:
        heapq.heappush(q, (abs(x), x))
    else:
        print(heapq.heappop(q)[1] if q else 0)
