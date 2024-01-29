def solution(spell, dic):
    sort = sorted(spell)

    return 1 if any(sort == sorted(s) for s in dic) else 2
