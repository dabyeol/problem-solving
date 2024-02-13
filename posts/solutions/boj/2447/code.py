def f(n):
    if n == 1:
        return ["*"]

    prev = f(n // 3)
    array = []
    for s in prev:
        array.append(s * 3)
    for s in prev:
        array.append(s + " " * (n // 3) + s)
    for s in prev:
        array.append(s * 3)

    return array


n = int(input())

for row in f(n):
    print(row)
