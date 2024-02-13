def f(n, array=[]):
    if n == len(array):
        return 1

    a = len(array)
    count = 0
    for b in range(n):
        for x, y in enumerate(array):
            if b == y or a - x == abs(b - y):
                break
        else:
            array.append(b)
            count += f(n, array)
            array.pop()

    return count


n = int(input())

print(f(n))
