def solution(n, words):
    visited = []
    sizewords = len(words)
    visited.append(words[0])
    for i in range(1, sizewords):
        if (words[i] in visited) or (words[i-1][-1] != words[i][0]):
            return [i % n + 1, i // n + 1]
        visited.append(words[i])
    return [0, 0]