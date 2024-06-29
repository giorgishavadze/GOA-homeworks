fav_cars = []
for i in range(5):
    car = input("Please enter your fav car: ")
    fav_cars.append(car)
print(fav_cars)

fav_films = ["jumanji","cxeli tavebi","kung fu panda"]
print(fav_films[2])

years = [13, 14, 12, 11, 10]
years[0] = 15
print(years)

fruits = ["apple", "dragon fruit", "kiwi", "orange"]
fruits.append("banana")
fruits.remove("dragon fruit")
print(fruits)

numbers = [1,2,14,0,5,6,-8]
min_number = numbers[0]
for number in numbers:
    if min_number > number:
        min_number = number
print(min_number)

numbers = [1,2,3,4,5,6,7,8]
max_number = numbers[0]
for number in numbers:
    if max_number < number:
        max_number = number
print(max_number)

numbers = [1,2,3,4,5,6,7,8]
sum_numbers = 0
for number in numbers:
    sum_numbers = sum_numbers + number