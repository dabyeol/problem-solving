n, m = map(int, input().split())
s = set(input() for _ in range(n))
array = list(input() for _ in range(m))

print(sum(int(v in s) for v in array))
