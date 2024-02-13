def merge_sort(a, p, r, log):
    if p < r:
        q = (p + r) // 2
        merge_sort(a, p, q, log)
        merge_sort(a, q + 1, r, log)
        merge(a, p, q, r, log)


def merge(a, p, q, r, log):
    i, j, tmp = p, q + 1, []
    while i <= q and j <= r:
        if a[i] <= a[j]:
            tmp.append(a[i])
            i += 1
        else:
            tmp.append(a[j])
            j += 1
    tmp += a[i : q + 1]
    tmp += a[j : r + 1]
    a[p : r + 1] = tmp
    log += tmp


n, k = map(int, input().split())
a = list(map(int, input().split()))

log = []
merge_sort(a, 0, len(a) - 1, log)

print(log[k - 1] if len(log) >= k else -1)
