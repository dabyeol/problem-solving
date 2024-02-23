l = int(input())
s = input()

r = 31
m = 1234567891
h = 0
for i, c in enumerate(s):
    h += (ord(c) - ord("a") + 1) * r**i
    h %= m

print(h)
