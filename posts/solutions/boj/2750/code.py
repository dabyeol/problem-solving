n = int(input())
array = [int(input()) for _ in range(n)]

array.sort()
for v in array:
    print(v)
