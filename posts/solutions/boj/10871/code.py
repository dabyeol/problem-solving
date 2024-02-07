n, x = map(int, input().split())
a = list(map(int, input().split()))

print(" ".join(str(v) for v in a if v < x))
