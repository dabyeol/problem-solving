n = int(input())
costs = [list(map(int, input().split())) for _ in range(n)]

r, g, b = 0, 0, 0
for ri, gi, bi in costs:
    r, g, b = min(g, b) + ri, min(r, b) + gi, min(r, g) + bi

print(min(r, g, b))
