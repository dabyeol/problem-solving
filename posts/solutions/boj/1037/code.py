count = int(input())
measures = list(map(int, input().split()))

print(min(measures) * max(measures))
