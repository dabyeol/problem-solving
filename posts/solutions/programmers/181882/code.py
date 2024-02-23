def solution(arr):
    answer = arr[:]
    for i, e in enumerate(answer):
        if e >= 50 and e % 2 == 0:
            answer[i] /= 2
        elif e < 50 and e % 2 == 1:
            answer[i] *= 2

    return answer
