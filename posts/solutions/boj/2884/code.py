h, m = map(int, input().split())

time = (24 * 60 + h * 60 + m - 45) % (24 * 60)

print(time // 60, time % 60)
