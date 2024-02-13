n, m = map(int, input().split())
s1 = set(input() for _ in range(n))
s2 = set(input() for _ in range(m))

s = s1 & s2

print(len(s))
for name in sorted(s):
    print(name)
