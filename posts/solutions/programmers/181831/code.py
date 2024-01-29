def solution(arr):
    return int(
        all(v == arr[j][i] for i, row in enumerate(arr) for j, v in enumerate(row))
    )
