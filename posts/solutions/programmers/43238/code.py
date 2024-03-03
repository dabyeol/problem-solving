def solution(n, times):
    left = 1
    right = min(times) * n + 1
    while left < right:
        mid = (left + right) // 2
        count = sum(mid // time for time in times)
        if count < n:
            left = mid + 1
        else:
            right = mid

    return left
