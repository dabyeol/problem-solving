from math import gcd


n = int(input())

gaps = []
prev = int(input())
for i in range(1, n):
    tree = int(input())
    gaps.append(tree - prev)
    prev = tree

g = gcd(*gaps)
print(sum(gap // g - 1 for gap in gaps))
