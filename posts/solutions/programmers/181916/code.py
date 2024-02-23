def solution(a, b, c, d):
    if a == b == c == d:
        return 1111 * a

    if a == b == c:
        return (10 * a + d) ** 2
    if a == b == d:
        return (10 * a + c) ** 2
    if a == c == d:
        return (10 * a + b) ** 2
    if b == c == d:
        return (10 * b + a) ** 2

    if a == b and c == d:
        return (a + c) * abs(a - c)
    if a == c and b == d:
        return (a + b) * abs(a - b)
    if a == d and b == c:
        return (a + b) * abs(a - b)

    if a == b:
        return c * d
    if a == c:
        return b * d
    if a == d:
        return b * c
    if b == c:
        return a * d
    if b == d:
        return a * c
    if c == d:
        return a * b

    return min(a, b, c, d)
