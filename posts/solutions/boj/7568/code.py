n = int(input())
array = [tuple(map(int, input().split())) for _ in range(n)]

ranks = []
for p, q in array:
    rank = 1
    for x, y in array:
        if x > p and y > q:
            rank += 1

    ranks.append(rank)

print(*ranks)
