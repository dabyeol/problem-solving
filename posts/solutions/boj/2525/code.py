a, b = map(int, input().split())
c = int(input())

time = (a * 60 + b + c) % (24 * 60)

print(time // 60, time % 60)
