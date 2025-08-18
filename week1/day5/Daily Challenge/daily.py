import math


class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide either radius or diameter")
    
    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * (self.radius ** 2)
    
    def __str__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter}, area={self.area:.2f})"
      
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented
       
    def __lt__(self, other):
        return self.radius < other.radius
    
    def __gt__(self, other):
        return self.radius > other.radius
    
    def __eq__(self, other):
        return self.radius == other.radius

c1 = Circle(radius=5)
c2 = Circle(diameter=10)
c3 = Circle(radius=7)

print(c1)   
print(c2)   
print(c3)   

c4 = c1 + c3
print(c4) 

print(c1 == c2)  
print(c1 < c3)   

circles = [c3, c1, c4, c2]
sorted_circles = sorted(circles)
for c in sorted_circles:
    print(c)





import turtle

t = turtle.Turtle()
t.speed(0)

for circle in sorted_circles:
    t.circle(circle.radius * 10)  
    t.penup()
    t.right(90)
    t.forward(30)
    t.left(90)
    t.pendown()

turtle.done()
