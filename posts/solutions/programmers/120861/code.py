def solution(keyinput, board):
    x, y = 0, 0
    lx, ly = ((l - 1) / 2 for l in board)
    for key in keyinput:
        if key == "up" and y < ly:
            y += 1
        elif key == "down" and y > -ly:
            y -= 1
        elif key == "left" and x > -lx:
            x -= 1
        elif key == "right" and x < lx:
            x += 1

    return [x, y]
