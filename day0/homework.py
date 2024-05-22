from turtle import *


#we want to paint a house

#drawing a square
speed(10)
width(7)
color("red")
begin_fill()
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
end_fill()
#end of square

forward(75)
left(90)

#drawing a door

color('yellow')
begin_fill()
forward(75)
right(90)
forward(50)
right(90)
forward(75)
left(90)
end_fill()
#end of door


color("red")
forward(75)
left(90)

forward(200)
left(45)

#drawing a roof

color("green")
begin_fill()
forward(140)
left(90)
forward(140)
end_fill()

#end of roof
color("red")
left(45)
forward(200)
left(90)
forward(30)
left(90)
forward(125)

#drawing a window

color("blue")
begin_fill()
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
end_fill()

color("brown")
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(25)
right(90)
forward(50)
right(90)
forward(25)
right(90)
forward(25)
right(90)
forward(50)
backward(50)

#end of wimdow

color("red")
backward(125)
right(90)
forward(120)
left(90)
forward(125)

#drawing a second window

color("blue")
begin_fill()
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
end_fill()

color("brown")
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(25)
left(90)
forward(50)
left(90)
forward(25)
left(90)
forward(25)
left(90)
forward(50)
backward(50)

exitonclick()