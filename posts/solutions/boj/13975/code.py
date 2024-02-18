import heapq


t = int(input())

for _ in range(t):
    k = int(input())
    q = list(map(int, input().split()))

    heapq.heapify(q)
    prev = heapq.heappop(q)
    count = 0
    while q:
        curr = heapq.heappop(q)
        if prev > curr:
            heapq.heappush(q, prev)
            prev = curr
        else:
            prev += curr
            count += prev

    print(count)
