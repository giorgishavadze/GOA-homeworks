def evens(nums):
    numbers = []
    for i in nums:
        if i %2 == 0:
            numbers.append(i)

    return numbers
print(evens([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))