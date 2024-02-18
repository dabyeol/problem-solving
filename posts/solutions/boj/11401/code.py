p = 1_000_000_007


def perm(n, k):
    mul = 1
    for i in range(n, n - k, -1):
        mul = mul * i % p

    return mul


def pow(n, k):
    if k == 1:
        return n % p

    if k % 2 == 0:
        return pow(n**2 % p, k // 2)
    else:
        return pow(n**2 % p, k // 2) * n % p


def comb(n, k):
    return perm(n, k) * pow(perm(k, k), p - 2) % p


n, k = map(int, input().split())

print(comb(n, k))
