import heapq


def solution(scoville, K):
    heap = scoville[:]
    heapq.heapify(heap)

    i = 0
    while heap[0] < K:
        if len(heap) < 2:
            return -1

        heapq.heappush(heap, heapq.heappop(heap) + heapq.heappop(heap) * 2)

        i += 1

    return i
