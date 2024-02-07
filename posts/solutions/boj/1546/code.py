n = int(input())
arr = list(map(int, input().split()))

m = max(arr)

print(sum(arr) / m * 100 / len(arr))
