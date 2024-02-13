while True:
    n = int(input())

    if n == -1:
        break

    measures = [m for m in range(1, n) if n % m == 0]
    if n == sum(measures):
        print(f"{n} = {' + '.join(map(str, measures))}")
    else:
        print(f"{n} is NOT perfect.")
