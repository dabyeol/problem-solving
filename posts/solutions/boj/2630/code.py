def f(paper, n=0, m=0, length=None):
    if length is None:
        length = len(paper)

    color = paper[n][m]
    for i in range(n, n + length):
        for j in range(m, m + length):
            if paper[i][j] != color:
                length //= 2
                white = 0
                blue = 0
                for w, b in [
                    f(paper, n, m, length),
                    f(paper, n, m + length, length),
                    f(paper, n + length, m, length),
                    f(paper, n + length, m + length, length),
                ]:
                    white += w
                    blue += b

                return (white, blue)

    return (int(color == 0), int(color == 1))


n = int(input())
paper = [list(map(int, input().split())) for _ in range(n)]

for count in f(paper):
    print(count)
