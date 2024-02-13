n = int(input())
cards = list(map(int, input().split()))

d = dict()
for card in cards:
    d[card] = d.get(card, 0) + 1

m = int(input())
cards = list(map(int, input().split()))

print(*[d.get(card, 0) for card in cards])
