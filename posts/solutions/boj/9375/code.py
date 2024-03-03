t = int(input())

for _ in range(t):
    n = int(input())

    d = dict()
    for _ in range(n):
        _, type = input().split()

        d[type] = d.get(type, 0) + 1

    count = 1
    for c in d.values():
        count *= c + 1

    print(count - 1)
