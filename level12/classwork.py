i = 20
while i >= 1:
    print(i)
    i = i - 1

i = 0
while i <= 10:
    print(i)
    i = i + 2

i = 1
sum = 0
while i <= 10:
    print(sum)
    sum = sum + i
    i = i + 1
    
password = 'luka_masi_magaria'
enter_password = ''
while password != enter_password:
    enter_password = input("please enter your password:")

if enter_password == password:
    print("you are correct")
else:
    print("try again")

l = 1
while l <= 10:
    print(i)
    l = l + 2

i = int(input("please enter your age:"))
l = 18
while l > i:
    i = int(input("please enter your age:"))
if l > i:
    print("you can't enter in this program")
else:
    print("you can enter in this program")

i = int(input("please enter number 1 to 7:"))
if i == 1:
    print("monday")
elif i == 2:
    print("tuesday")
elif i == 3:
    print("wednesday")
elif i == 4:
    print("thursday")
elif i == 5:
    print("friday")
elif i == 6:
    print("saturday")
elif i == 7:
    print("sunday")
else:
    print("bruh")

i = 0
while i <= 10:
    if i % 2 == 0:
        print(str(i) + " is even")
    else:
        print(str(i) + " is odd")
    i = i + 1

age = int(input("please enter your age:"))
if age > 0 and age < 12:
    print("you are a kid")
elif age > 12 and age < 18:
    print("you are a teen")
elif age > 18:
    print("you are adult")

age = int(input("please enter your age:"))
if age >= 18:
    print("you can participate in election")
else:
    print("you can't participate in election")