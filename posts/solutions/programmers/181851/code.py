def solution(rank, attendance):
    (_, a), (_, b), (_, c) = sorted(
        [r, i] for i, r in enumerate(rank) if attendance[i]
    )[:3]

    return 10000 * a + 100 * b + c
