while True:
    a, b, c = sorted(map(int, input().split()))

    if not a:
        break

    if a + b <= c:
        print("Invalid")
    else:
        if a == b and b == c:
            print("Equilateral")
        elif a == b or b == c:
            print("Isosceles")
        else:
            print("Scalene")
