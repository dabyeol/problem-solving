n = int(input())
s = set(input() for _ in range(n))

for string in sorted(s, key=lambda x: (len(x), x)):
    print(string)
