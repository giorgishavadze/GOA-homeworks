car = {
    "mark": "ford",
    "name": "mustang",
    "age": 1967,
    "engine": 3.3
}
print(car)

shavadze = {
    "name": "giorgi",
    "age": 15

}
print(shavadze)

shavadze.update({"surname": "shavadze0"})
shavadze["email" ]= "hello"
print(shavadze)

empty_dict = {}
for i in range(1,1001):
    empty_dict["item_{0}".format(i)] = 1
print(empty_dict)