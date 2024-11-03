arr = [[1, 0, 0],
        [0, 0, 0],
        [0, 0, 1]
    ]
for i in range(len(arr)):
    for o in range(len(arr[i])):
        arr[i][o] += 1

print(arr)

arr = [
    [True, False, True],
    [False, True, False]
]
for i in range(len(arr)):
    for j in range(len(arr[i])):
        arr[i][j] = not arr[i][j]
for row in arr:
    print(row)