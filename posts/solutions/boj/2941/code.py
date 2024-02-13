ca = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]
s = input()

for a in ca:
    s = s.replace(a, " ")

print(len(s))
