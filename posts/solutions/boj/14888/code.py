def f(a, ops, acc=None, count=1):
    if acc is None:
        acc = a[0]

    if count == len(a):
        return [acc]

    array = []
    for i, op in enumerate(ops):
        if op:
            tmp = acc
            if i == 0:
                tmp += a[count]
            elif i == 1:
                tmp -= a[count]
            elif i == 2:
                tmp *= a[count]
            else:
                tmp = int(tmp / a[count])

            ops[i] -= 1
            array += f(a, ops, tmp, count + 1)
            ops[i] += 1

    return array


n = int(input())
a = list(map(int, input().split()))
ops = list(map(int, input().split()))

res = f(a, ops)

print(max(res))
print(min(res))
