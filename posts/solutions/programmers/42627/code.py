import heapq


def solution(jobs):
    sort = sorted(jobs, reverse=True)
    heap = []
    time, total = 0, 0
    while sort or heap:
        while sort and sort[-1][0] <= time:
            heapq.heappush(heap, sort.pop()[::-1])

        if heap:
            t, s = heapq.heappop(heap)
            time += t
            total += time - s
        else:
            time += 1

    return total // len(jobs)
