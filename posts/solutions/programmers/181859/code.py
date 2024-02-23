def solution(arr):
    stk = []
    for e in arr:
        if stk and stk[-1] == e:
            stk.pop()
        else:
            stk.append(e)

    return stk or [-1]
