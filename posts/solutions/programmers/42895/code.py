def solution(N, number):
    memo = []
    for count in range(1, 9):
        s = set([int("1" * count) * N])

        for i in range(count - 1):
            for ai in memo[i]:
                for bi in memo[-(i + 1)]:
                    s.add(ai + bi)
                    s.add(ai - bi)
                    s.add(ai * bi)
                    if bi:
                        s.add(ai // bi)

        if number in s:
            return count

        memo.append(s)

    return -1
