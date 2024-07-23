num = [5, 4, 7, 1, 8]
print(num[1:4])

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
print(num[0:5] + num1[0:5])

num = ["hi", "helo", "hello", "yo", "hiiiii", "zd"]
x = num.index("hi")
print(x)
x = num.index("helo")
print(x)
x = num.index("hello")
print(x)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
x = numbers[1:]
min_number = x[0]
for number in x:
    if min_number > number:
        min_number = number
print(min_number)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
x = numbers[:9]
max_number = x[0]
for number in x:
    if max_number < number:
        max_number = number
print(max_number)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
number = numbers[1:9]
num = number.append(1)
num = number.append(10)
print(num)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in range(len(numbers) , -1, -1):
    print(i)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(numbers[::-1])

num = ["hi", "helo", "hello", "yo", "hiiiii", "zd"]
for i in range(len(num) , -1, -1):
    print(i)

num = ["hi", "helo", "hello", "yo", "hiiiii", "zd"]
print(num[::-1])