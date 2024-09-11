def evensandodds(nums):
    numbers = []
    for i in nums:
        if i %2 == 0:
            i = i / 2
            numbers.append(int(i))
        else:
            i = i * 2
            numbers.append(int(i))
    return numbers
print(evensandodds([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))