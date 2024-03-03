def solution(distance, rocks, n):
    dists = []
    prev = 0
    for rock in sorted(rocks) + [distance]:
        dists.append(rock - prev)
        prev = rock

    left = 0
    right = distance + 1
    while left < right:
        mid = (left + right) // 2

        d = 0
        r = n
        f = True
        for dist in dists:
            d += dist
            if d < mid:
                if not r:
                    f = False
                    break

                r -= 1
            else:
                d = 0

        if f:
            left = mid + 1
        else:
            right = mid

    return right - 1
