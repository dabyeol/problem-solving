def solution(polynomial):
    a, b = 0, 0
    for n in polynomial.split(" + "):
        if "x" in n:
            a += int(n[:-1] or 1)
        else:
            b += int(n)

    if a and b:
        return f"{a if a > 1 else ''}x + {b}"
    elif a:
        return f"{a if a > 1 else ''}x"
    else:
        return str(b)
