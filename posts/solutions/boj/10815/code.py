n = int(input())
s = set(n for n in map(int, input().split()))
m = int(input())
array = list(map(int, input().split()))

print(*[int(v in s) for v in array])
