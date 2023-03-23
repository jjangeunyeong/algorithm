word = input()
answer = []


def CToJava(word):
    global answer
    for w in word:
        if w.isupper():
            answer = "Error!"
            return

    if word[0] == '_' or word[-1] == '_':
        answer = "Error!"
        return

    for i in range(0, len(word)-1):
        if word[i] == word[i+1] == '_':
            answer = "Error!"
            return

    for w in word[::-1]:
        if w == '_':
            answer[-1] = answer[-1].upper()
        else:
            answer.append(w)
    answer.reverse()


def JavaToC(word):
    global answer
    if word[0].isupper():
        answer = "Error!"
        return

    for i in word:
        if i.isupper():
            answer.append('_')
            answer.append(i.lower())
        else:
            answer.append(i)
    return


if '_' in word:
    CToJava(word)
else:
    JavaToC(word)

print(''.join(answer))
