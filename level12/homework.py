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

budget=int(input("please enter your budget:"))
product=int(input("please enter product value:"))
if budget > product:
    print("you can buy product")
else:
    print("you can't buy product")