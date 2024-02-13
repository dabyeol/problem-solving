from collections import deque


n, k = map(int, input().split())

q = deque(range(1, n + 1))
array = []
for _ in range(n):
    q.rotate(-(k - 1))
    array.append(q.popleft())

print(f"<{str(array)[1:-1]}>")
