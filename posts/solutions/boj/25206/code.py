grades = {
    "A+": 4.5,
    "A0": 4.0,
    "B+": 3.5,
    "B0": 3.0,
    "C+": 2.5,
    "C0": 2.0,
    "D+": 1.5,
    "D0": 1.0,
    "F": 0.0,
}

csum = 0
msum = 0
for _ in range(20):
    _, credit, grade = input().split()
    credit = float(credit)

    if grade != "P":
        csum += credit
        msum += credit * grades[grade]

print(msum / csum)
