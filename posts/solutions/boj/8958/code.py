t = int(input())

for _ in range(t):
    s = input()

    score = 0
    streak = 0
    for a in s:
        if a == "O":
            streak += 1
            score += streak
        else:
            streak = 0

    print(score)
