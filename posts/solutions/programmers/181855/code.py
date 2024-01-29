def solution(strArr):
    d = dict()
    for s in strArr:
        d[len(s)] = d.get(len(s), 0) + 1

    return max(d.values())
