n = int(input())

count = 0
for _ in range(n):
    s = input()
    d = set()
    i = 0
    while i < len(s):
        c = s[i]

        if c in d:
            break

        d.add(c)
        while i < len(s) and c == s[i]:
            i += 1

    if i == len(s):
        count += 1

print(count)
