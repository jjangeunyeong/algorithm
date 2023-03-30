# JadenCase 문자열 만들기

# solution
# 문자열 s를 입력받아 미리 소문자로 모두 변경, split()


def solution(s):
    s = s.lower().split()
    answer = []
    for i in range(len(s)):
        answer.append(s[i][0].upper()+s[i][1:])

    return ' '.join(answer)


s = input()
print(solution(s))

# solution 1 실패
# IndexError: string index out of range

# split(" ")으로 수정
# s[i][0] -> s[i][:1]로 수정
# [:1]일 때는 s[i]가 비워있어도 가능! but, [0]은 비워있으면 안됨!!


def solution2(s):
    s = s.lower().split(" ")
    answer = []
    for i in range(len(s)):
        answer.append(s[i][:1].upper()+s[i][1:])

    return ' '.join(answer)


print(solution2(s))
