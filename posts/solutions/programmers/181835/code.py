def solution(arr, k):
    if k % 2 == 1:
        return [e * k for e in arr]
    else:
        return [e + k for e in arr]
