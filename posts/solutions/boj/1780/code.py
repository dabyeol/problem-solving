def f(paper, n=0, m=0, length=None):
    if length is None:
        length = len(paper)

    number = paper[n][m]
    for i in range(n, n + length):
        for j in range(m, m + length):
            if paper[i][j] != number:
                length //= 3
                counts = [0] * 3
                for a in range(3):
                    for b in range(3):
                        for k, v in enumerate(
                            f(paper, n + length * a, m + length * b, length)
                        ):
                            counts[k] += v

                return counts

    return [int(number == i) for i in [-1, 0, 1]]


n = int(input())
paper = [list(map(int, input().split())) for _ in range(n)]

for count in f(paper):
    print(count)
