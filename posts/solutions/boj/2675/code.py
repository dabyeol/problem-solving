t = int(input())

for _ in range(t):
    r, s = input().split()
    r = int(r)

    print("".join(c * r for c in s))
