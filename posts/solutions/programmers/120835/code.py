def solution(emergency):
    sort = sorted(emergency, reverse=True)

    return [sort.index(e) + 1 for e in emergency]
