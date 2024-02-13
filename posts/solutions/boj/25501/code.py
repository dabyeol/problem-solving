def recursion(s, l, r, c):
    c += 1
    if l >= r:
        return 1, c
    elif s[l] != s[r]:
        return 0, c
    else:
        return recursion(s, l + 1, r - 1, c)


def f(s):
    return recursion(s, 0, len(s) - 1, 0)


t = int(input())

for _ in range(t):
    s = input()
    print(*f(s))
