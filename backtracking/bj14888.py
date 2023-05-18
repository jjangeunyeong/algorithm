N = int(input())
numArr = list(map(int, input().split()))  # 수열
add, sub, mul, div = map(int, input().split())  # (+,-.*,/) 개수

maxAns = -1e9
minAns = 1e9


def sol(idx, num, add, sub, mul, div):
    global maxAns, minAns
    print(1)
    print(add, sub, mul, div)
    if idx == N:
        print(2)
        maxAns = max(maxAns, num)
        minAns = min(minAns, num)
        print(maxAns, minAns)
        return

    if add:
        print(3)
        sol(idx+1, num+numArr[idx], add-1, sub, mul, div)
    if sub:
        print(4)
        sol(idx+1, num-numArr[idx], add, sub-1, mul, div)
    if mul:
        print(5)
        sol(idx+1, num*numArr[idx], add, sub, mul-1, div)
    if div:
        print(6)
        if num < 0:
            sol(idx+1, -((-num)//numArr[idx]), add, sub, mul, div-1)
        else:
            sol(idx+1, num//numArr[idx], add, sub, mul, div-1)


sol(1, numArr[0], add, sub, mul, div)
print(maxAns)
print(minAns)
