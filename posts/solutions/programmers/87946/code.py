from itertools import permutations


def solution(k, dungeons):
    p = permutations(dungeons)
    answer = 0
    for d in p:
        f = k
        count = 0
        for a, b in d:
            if f < a:
                break

            count += 1
            f -= b

        answer = max(answer, count)

    return answer
