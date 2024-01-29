def solution(id_pw, db):
    id, pw = id_pw
    d = dict(db)

    if id not in d:
        return "fail"

    if d[id] != pw:
        return "wrong pw"

    return "login"
