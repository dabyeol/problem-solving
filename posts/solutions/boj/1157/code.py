s = input()

s = s.upper()
d = dict()
for c in s:
    d[c] = d.get(c, 0) + 1

sort = sorted(d.items(), key=lambda x: x[1], reverse=True)
if not len(sort) == 1 and sort[0][1] == sort[1][1]:
    print("?")
else:
    print(sort[0][0])
