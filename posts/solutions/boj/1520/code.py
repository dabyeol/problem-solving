def f(array, i=0, j=0, memo=None):
    if memo is None:
        memo = [[-1] * len(array[0]) for _ in array]

    if i == len(array) - 1 and j == len(array[0]) - 1:
        return 1

    if memo[i][j] == -1:
        count = 0
        if i > 0 and array[i][j] > array[i - 1][j]:
            count += f(array, i - 1, j, memo)
        if i < len(array) - 1 and array[i][j] > array[i + 1][j]:
            count += f(array, i + 1, j, memo)
        if j > 0 and array[i][j] > array[i][j - 1]:
            count += f(array, i, j - 1, memo)
        if j < len(array[0]) - 1 and array[i][j] > array[i][j + 1]:
            count += f(array, i, j + 1, memo)

        memo[i][j] = count

    return memo[i][j]


m, n = map(int, input().split())
array = [list(map(int, input().split())) for _ in range(m)]

print(f(array))
