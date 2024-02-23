def solution(arr):
    stk = []
    for e in arr:
        while stk and stk[-1] >= e:
            stk.pop()

        stk.append(e)

    return stk
