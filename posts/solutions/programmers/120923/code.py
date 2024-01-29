def solution(num, total):
    start = int(total / num - (num - 1) / 2)

    return list(range(start, start + num))
