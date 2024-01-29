def solution(arr):
    stk = []
    for v in arr:
        if stk and stk[-1] == v:
            stk.pop()
        else:
            stk.append(v)

    return stk or [-1]
