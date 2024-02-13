from math import gcd


a1, b1 = map(int, input().split())
a2, b2 = map(int, input().split())


numer = a1 * b2 + a2 * b1
denom = b1 * b2
g = gcd(numer, denom)

print(numer // g, denom // g)
