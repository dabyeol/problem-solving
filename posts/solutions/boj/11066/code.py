t = int(input())

for _ in range(t):
    k = int(input())
    c = list(map(int, input().split()))

    memo = [[0] * (k + 1) for _ in range(k)]
    prefix_sum = [0]
    for ci in c:
        prefix_sum.append(prefix_sum[-1] + ci)

    for length in range(2, k + 1):
        for start in range(0, k - length + 1):
            stop = start + length
            minvalue = min(
                memo[start][x] + memo[x][stop] for x in range(start + 1, stop)
            )

            memo[start][stop] = minvalue + prefix_sum[stop] - prefix_sum[start]

    print(memo[0][k])
