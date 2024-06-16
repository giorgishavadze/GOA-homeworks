code = input("please enter password:")
thecode = "luka1234"
if code == thecode:
  print("code is correct")
else:
  print("code incorrect")

product=1
for i in range (5):
    num=int(input("please enter number"))
    product=product * num
    print(product)

sum=0
for i in range(5, 16):
   num=int(input("please enter numbers:"))
   sum=sum + num
   print(sum)