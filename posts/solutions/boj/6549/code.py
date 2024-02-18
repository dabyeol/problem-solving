def f(h, start=0, stop=None):
    if stop is None:
        stop = len(h)

    if stop - start == 1:
        return h[start]

    mid = (start + stop) // 2
    left, right = mid - 1, mid + 1
    height = h[mid]
    maxvalue = height
    while height and (left >= start or right < stop):
        hl = h[left] if left >= start else 0
        hr = h[right] if right < stop else 0

        if hl >= hr:
            height = min(height, hl)
            left -= 1
        else:
            height = min(height, hr)
            right += 1

        maxvalue = max(maxvalue, (right - left - 1) * height)

    return max(f(h, start, mid), maxvalue, f(h, mid, stop))


while True:
    n, *h = map(int, input().split())

    if not n:
        break

    print(f(h))
