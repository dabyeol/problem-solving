def solution(citations):
    for i, c in enumerate(sorted(citations, reverse=True)):
        if i + 1 > c:
            return i

    return len(citations)
