from collections import deque


def solution(numbers, direction):
    deq = deque(numbers)
    if direction == "left":
        deq.rotate(-1)
    else:
        deq.rotate(1)

    return list(deq)
