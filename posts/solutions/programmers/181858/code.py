def solution(arr, k):
    d = dict.fromkeys(arr)

    return [*d][:k] + [-1] * (k - len(d))
