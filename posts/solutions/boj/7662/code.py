import heapq
import sys


t = int(input())

for _ in range(t):
    k = int(input())

    maxq = []
    minq = []
    visited = [False] * k
    for i in range(k):
        c, n = sys.stdin.readline().split()
        n = int(n)

        if c == "I":
            heapq.heappush(maxq, (-n, i))
            heapq.heappush(minq, (n, i))
            visited[i] = True
        else:
            if n == 1:
                while maxq and not visited[maxq[0][1]]:
                    heapq.heappop(maxq)

                if maxq:
                    visited[heapq.heappop(maxq)[1]] = False

            else:
                while minq and not visited[minq[0][1]]:
                    heapq.heappop(minq)

                if minq:
                    visited[heapq.heappop(minq)[1]] = False

    while maxq and not visited[maxq[0][1]]:
        heapq.heappop(maxq)

    while minq and not visited[minq[0][1]]:
        heapq.heappop(minq)

    if maxq:
        print(-maxq[0][0], minq[0][0])
    else:
        print("EMPTY")
