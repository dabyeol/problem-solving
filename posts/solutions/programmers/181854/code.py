def solution(arr, n):
    if len(arr) % 2 == 1:
        return [v + n if i % 2 == 0 else v for i, v in enumerate(arr)]
    else:
        return [v + n if i % 2 == 1 else v for i, v in enumerate(arr)]
