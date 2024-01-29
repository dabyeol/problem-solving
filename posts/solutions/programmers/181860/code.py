def solution(arr, flag):
    answer = []
    for i, v in enumerate(arr):
        if flag[i]:
            answer += [v] * v * 2
        else:
            answer = answer[:-v]

    return answer
