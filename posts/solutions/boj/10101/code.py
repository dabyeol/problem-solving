angles = [int(input()) for _ in range(3)]

if sum(angles) != 180:
    print("Error")
else:
    s = set(angles)
    if len(s) == 1:
        print("Equilateral")
    elif len(s) == 2:
        print("Isosceles")
    else:
        print("Scalene")
