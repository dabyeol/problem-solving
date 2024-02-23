def solution(arr):
    return int(
        all(e == arr[j][i] for i, row in enumerate(arr) for j, e in enumerate(row))
    )
