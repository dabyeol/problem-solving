def solution(money):
    prev2 = 0
    prev1 = 0
    curr = 0
    for m in money[:-1]:
        prev2, prev1, curr = prev1, curr, max(prev2, prev1) + m

    a1 = max(prev1, curr)

    prev2 = 0
    prev1 = 0
    curr = 0
    for m in money[1:]:
        prev2, prev1, curr = prev1, curr, max(prev2, prev1) + m

    a2 = max(prev1, curr)

    return max(a1, a2)
