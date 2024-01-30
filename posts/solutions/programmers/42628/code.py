import heapq


def solution(operations):
    heap = []
    for operation in operations:
        c, n = operation.split()
        if c == "I":
            heapq.heappush(heap, int(n))
        elif heap:
            if n == "1":
                heap.sort()
                heap.pop()
                heapq.heapify(heap)
            else:
                heapq.heappop(heap)

    heap.sort()
    return [heap[-1], heap[0]] if heap else [0, 0]
