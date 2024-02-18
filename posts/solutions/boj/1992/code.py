def f(array, n=0, m=0, length=None):
    if length is None:
        length = len(array)

    for i in range(n, n + length):
        for j in range(m, m + length):
            if array[i][j] != array[n][m]:
                length //= 2

                return (
                    "("
                    + f(array, n, m, length)
                    + f(array, n, m + length, length)
                    + f(array, n + length, m, length)
                    + f(array, n + length, m + length, length)
                    + ")"
                )

    return array[n][m]


n = int(input())
array = [input() for _ in range(n)]

print(f(array))
