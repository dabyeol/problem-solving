import sys


def round(n):
    return int(n + 0.5)


n = int(input())
opinions = [int(sys.stdin.readline()) for _ in range(n)]

if not opinions:
    print(0)
else:
    cut = round(len(opinions) * 0.15)
    array = sorted(opinions)[cut : len(opinions) - cut]

    print(round(sum(array) / len(array)))
