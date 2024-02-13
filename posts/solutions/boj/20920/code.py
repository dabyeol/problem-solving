from collections import Counter
import sys


n, m = map(int, input().split())
words = [sys.stdin.readline().rstrip() for _ in range(n)]

filtered = [word for word in words if len(word) >= m]
c = Counter(sorted(filtered, key=lambda x: (-len(x), x))).most_common()

for word, _ in c:
    print(word)
