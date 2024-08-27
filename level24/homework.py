manual_count = input("please enter string:")
for i in manual_count:
    print(i,"=",manual_count.count(i)"times")
#islower() აბრუნებს True-ს, თუ სტრინგში ყველა სიმბოლო პატარა სიმბოლოა
#isupper() აბრუნებს True-ს, თუ სტრინგში ყველა სიმბოლო დიდი სიმბოლოა
#isnumeric() აბრუნებს True-ს, თუ სტრინგში ყველა სიმბოლო არის რიცხვითი
#isalpha() აბრუნებს True-ს, თუ სტრინგის ყველა სიმბოლო ასოა
name = "giorgi"
print(name.islower())
name = "GIORGI"
print(name.isupper())
name = '1' '2' '3' '4' '5'
print(name.isnumeric())
name = "giorgi"
print(name.isalpha())