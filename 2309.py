height = [int(input()) for _ in range(9)]
sum = 0
firstIdx = -1
secondIdx = -1
answer = []

# input()값 받고 정렬한 다음 문제풀기

for i in height:
    sum = sum+i

diff = sum-100

# 이중반복문 사용하지 않고 모든 조합 구하는 함수 permutations, combinations, itertools(두개이상리스트)
for i in range(9):
    for j in range(i+1, 9):
        if height[i]+height[j] == diff:
            firstIdx = i
            secondIdx = j
            break  # break로 반복문 하나만 빠져나가는 것임

for i, v in enumerate(height):
    if i == firstIdx or i == secondIdx:
        continue
    else:
        answer.append(v)

answer.sort()

for i in answer:
    print(i)

# solution2 : 재귀이용
