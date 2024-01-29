def solution(arr, k):
    if k % 2 == 1:
        return [v * k for v in arr]
    else:
        return [v + k for v in arr]
