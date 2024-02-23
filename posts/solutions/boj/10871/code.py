n, x = map(int, input().split())
a = list(map(int, input().split()))

print(" ".join(str(e) for e in a if e < x))
