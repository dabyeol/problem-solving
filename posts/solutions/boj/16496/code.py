n = int(input())
array = input().split()

array.sort(key=lambda x: x * 9, reverse=True)

print(int("".join(array)))
