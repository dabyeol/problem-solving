def solution(arr, flag):
    answer = []
    for i, e in enumerate(arr):
        if flag[i]:
            answer += [e] * e * 2
        else:
            answer = answer[:-e]

    return answer
