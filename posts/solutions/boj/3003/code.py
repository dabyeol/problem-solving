pieces = [1, 1, 2, 2, 2, 8]
counts = map(int, input().split())

print(*(p - c for p, c in zip(pieces, counts)))
