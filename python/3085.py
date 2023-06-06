N = int(input())
candies = []
for _ in range(N):
    candies.append(list(input()))


answer = 0
tmp = 1
for i in range(N):
    for j in range(1, N):
        if candies[i][j] == candies[i][j-1]:
            tmp += 1
        else:
            answer = max(tmp, answer)
            tmp = 1
    answer = max(answer, tmp)
    tmp = 1


tmp = 1

for i in range(N):
    for j in range(1, N):
        if candies[j][i] == candies[j-1][i]:
            tmp += 1
        else:
            answer = max(tmp, answer)
            tmp = 1
    answer = max(answer, tmp)
    tmp = 1


print(N) if answer == N else print(answer+1)
