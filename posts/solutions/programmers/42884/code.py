def solution(routes):
    camera = 30000
    answer = 1
    for start, end in sorted(routes):
        if camera < start:
            camera = end
            answer += 1
            continue

        camera = min(camera, end)

    return answer
