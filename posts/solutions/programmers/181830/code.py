def solution(arr):
    r = len(arr)
    c = len(arr[0])

    if r == c:
        return arr

    l = max(r, c)
    answer = [[0] * l for _ in range(l)]
    for i, row in enumerate(arr):
        for j, e in enumerate(row):
            answer[i][j] = e

    return answer
