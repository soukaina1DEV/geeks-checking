#exercice1
print("hello world\n" * 4)

#exercice2
result = 99**3*8
print(result)

#exercice3 
my_name = "soukaina"
user_name = input("enter your name: " )
if my_name == user_name:
   print("Oh we have the same name")
else:
   print("nice to meet you " + user_name)

#exercice4
user_height = int(input("enter your height: " ))
if user_height > 145:
   print("you are tall enough to ride.")
else:
   print("you need to grow some more to ride.")

#exercice5
my_fav_numbers = {5,7,2,9}
my_fav_numbers.add(4)
my_fav_numbers.add(6)
my_fav_numbers.pop()
print(my_fav_numbers)

friend_fav_numbers = {1,3,8}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers) 
print(our_fav_numbers)

# exercice6
answer = print("yes, Tuples are immutable lists, which means items can’t be changed.")

#exercice7
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
print(basket)
count_apples = basket.count("Apples")
print(count_apples)
basket.clear()
print(basket)

# exercice8
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders :
    sandwich_orders.remove("Pastrami sandwich")
print(sandwich_orders)

finished_sandwiches = []

for sandwich in sandwich_orders:
    print(f"i made your {sandwich}")
    finished_sandwiches.insert(0,sandwich)


