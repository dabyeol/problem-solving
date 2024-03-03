n = int(input())
m = int(input())
s = input()

i = 0
p = 0
count = 0
while i < m:
    if s[i : i + 3] == "IOI":
        i += 2
        p += 1
    else:
        if p >= n:
            count += p - n + 1
        p = 0
        i += 1

print(count)
