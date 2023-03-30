H, W = map(int, input().split())
blockH = list(map(int, input().split()))
total = 0

for i in range(1, W-1):
    left = max(blockH[:i])
    right = max(blockH[i+1:])
    tmp = min(left, right)

    if tmp > blockH[i]:
        total += tmp-blockH[i]

print(total)
