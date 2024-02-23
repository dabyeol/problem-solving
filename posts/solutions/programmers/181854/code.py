def solution(arr, n):
    if len(arr) % 2 == 1:
        return [e + n if i % 2 == 0 else e for i, e in enumerate(arr)]
    else:
        return [e + n if i % 2 == 1 else e for i, e in enumerate(arr)]
