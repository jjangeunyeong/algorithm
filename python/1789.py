S = int(input())
N = 0
num = 1

while (1):
    if S-num < 0:
        break
    else:
        S -= num
        num += 1
        N += 1

print(N)
