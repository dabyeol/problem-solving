def solution(arr):
    stk = []
    for v in arr:
        while stk and stk[-1] >= v:
            stk.pop()

        stk.append(v)

    return stk
