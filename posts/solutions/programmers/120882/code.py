def solution(score):
    sort = sorted([sum(s) for s in score], reverse=True)

    return [sort.index(sum(s)) + 1 for s in score]
