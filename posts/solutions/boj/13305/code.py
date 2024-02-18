n = int(input())
lengths = list(map(int, input().split()))
prices = list(map(int, input().split()))

price = prices[0]
sum = 0
for l, p in zip(lengths, prices[:-1]):
    price = min(price, p)
    sum += price * l

print(sum)
