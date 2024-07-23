numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
min_number = numbers[0]
for number in numbers:
    if min_number > number:
        min_number = number
print(min_number)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
max_number = numbers[0]
for number in numbers:
    if max_number < number:
        max_number = number
print(max_number)

num = [1, 2, 3, 4, 5, 6]
x = num.index(1)
print(x)
x = num.index(3)
print(x)
x = num.index(5)
print(x)

numbers = [1, 2, 3, 4, 5]
words = ["mango", "apple", "banana", "kiwi", "watermellon",]
numbers_and_words = []
numbers_and_words.append(numbers[0])
numbers_and_words.append(words[0])
numbers_and_words.append(numbers[1])
numbers_and_words.append(words[1])
numbers_and_words.append(numbers[2])
numbers_and_words.append(words[2])
numbers_and_words.append(numbers[3])
numbers_and_words.append(words[3])
numbers_and_words.append(numbers[4])
numbers_and_words.append(words[4])
print(numbers_and_words)

numbers = []
words = []
numbers.append(numbers_and_words[0])
numbers_and_words.remove(1)
words.append(numbers_and_words[0])
numbers_and_words.remove("mango")
numbers.append(numbers_and_words[0])
numbers_and_words.remove(2)
words.append(numbers_and_words[0])
numbers_and_words.remove("apple")
numbers.append(numbers_and_words[0])
numbers_and_words.remove(3)
words.append(numbers_and_words[0])
numbers_and_words.remove("banana")
numbers.append(numbers_and_words[0])
numbers_and_words.remove(4)
words.append(numbers_and_words[0])
numbers_and_words.remove("kiwi")
numbers.append(numbers_and_words[0])
numbers_and_words.remove(5)
words.append(numbers_and_words[0])
numbers_and_words.remove("watermellon")
print(numbers)
print(words)

words = ["mango", "apple", "banana", "kiwi", "watermellon",]
word = []
word.append(len(words[0]))
word.append(len(words[1]))
word.append(len(words[2]))
word.append(len(words[3]))
word.append(len(words[4]))
print(word)