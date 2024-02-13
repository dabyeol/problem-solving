n = int(input())
points = [list(map(int, input().split())) for _ in range(n)]

for x, y in sorted(points):
    print(x, y)
