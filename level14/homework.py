#pop
list_of_int = [5, 2, 5, 6, 7, 1, 4, 6, 3, 8]
list_of_int.pop(9)
print(list_of_int)

list_of_str = ["ball", "roof", "book", "pen", "keyboard"]
list_of_str.pop(0)
list_of_str.append("ball")
print(list_of_str)

characters = ["luffy", "nezuko", "ichigo", "asta"]
characters.pop(2)
print(characters)

helo = ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"]
#helo.pop(20)
print(helo)

#count
#უკაცრავად ბოდიში არ გეგონოთ რომ ვერ დავწერე ანდ არ დავწერე, უბრალოდ count-ს რომ ვწერ ტერმინალში მიჩვენებს round-ს ხომ არ გულისხმობთო.
#და როგორ მოვიქცე?

#max
numbers = [0,2,14,1,5,6,-8]
max_number = numbers[0]
for i in numbers:
    if max_number < i:
        max_number = i
print(max_number)

word = ["Hippopotomonstrosesquippedaliophobia", "Pneumonoultramicroscopicsilicovolcanoconiosis", "Supercalifragilisticexpialidocious", "None"]
max_len = -1
max_string = None
for i in word:
    if len(i) > max_len:
        max_len = len(i)
        max_string = i
print(max_string)

temperature = [30, 31, 32, 40, 37, 35]
max_temperature = temperature[0]
for i in temperature:
    if max_temperature < i:
        max_temperature = i
print(max_temperature)

product = [50, 100, 150, 75]
max_price = product[0]
for i in product:
    if max_price < i:
        max_price = i
print(max_price)

#min
numbers = [0,2,14,1,5,6,-8]
min_number = numbers[0]
for i in numbers:
    if min_number > i:
        min_number = i
print(min_number)

word = ["Hippopotomonstrosesquippedaliophobia", "Pneumonoultramicroscopicsilicovolcanoconiosis", "Supercalifragilisticexpialidocious", "None"]
min_len = -1
min_string = None
for i in word:
    if len(i) < min_len:
        min_len = len(i)
        min_string = i
print(min_string)

temperature = [30, 31, 32, 40, 37, 35]
min_temperature = temperature[0]
for i in temperature:
    if min_temperature > i:
        min_temperature = i
print(min_temperature)

product = [50, 100, 150, 75]
min_price = product[0]
for i in product:
    if min_price > i:
        min_price = i
print(min_price)

#sum
num = [5, 2, 5, 6, 7, 1, 4, 6, 3, 8]
sum = 0
for i in num:
    sum = sum + i
print(sum)

def hero(helo):
    count = 0
    for i in helo:
        count += 1
    return count
print(hero("i like goa so much"))

def nested(nest):
    sum = 0
    for i in nest:
        if isinstance(i, list):
            for j in i:
                sum += j
        elif isinstance(i, tuple):
            for k in i:
                sum += i
        else:
            sum += i
    print(sum)

list1 = [1, 2, 3, 4, 5, [15, 23, 32]]
nested(list1)

#len
num = [5, 2, 5, 6, 7, 1, 4, 6, 3, 8]
print(len(num))

elements = ["monday", "thuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
print(len(elements))
print(elements[0:5])

# nested list
list = [10, 34, 90, [45, 78, 3], 89] #nested list-ში მყოფი რიცხვები 1 ადგილს იკავებს, მაგრამ შეგიძლია ამოირჩიო რიცხვებიდან ერთერთი.
print(len(list))