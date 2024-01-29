def solution(arr):
    answer = arr[:]
    for i, v in enumerate(answer):
        if v >= 50 and v % 2 == 0:
            answer[i] /= 2
        elif v < 50 and v % 2 == 1:
            answer[i] *= 2

    return answer
