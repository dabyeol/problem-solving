from collections import deque


def solution(people, limit):
    d = deque(sorted(people))
    answer = 0
    while d:
        if d[0] + d[-1] <= limit:
            d.popleft()

        if d:
            d.pop()

        answer += 1

    return answer
