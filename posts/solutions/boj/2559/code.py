n, k = map(int, input().split())
array = list(map(int, input().split()))

curr = sum(array[:k])
maxvalue = curr
for i in range(k, n):
    curr = curr - array[i - k] + array[i]
    maxvalue = max(maxvalue, curr)

print(maxvalue)
