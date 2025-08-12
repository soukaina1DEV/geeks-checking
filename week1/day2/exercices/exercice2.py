import random
# Exercise 1 : Convert lists into dictionaries

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

a_dictionary = dict(zip(keys, values))
print(a_dictionary)

# Exercise 2 : Cinemax #2

Total_family_cost = 0

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
for age in family.values():
    if age < 3:
        Total_family_cost += 0
    elif 3 <= age <= 12:
        Total_family_cost += 10
    else:
        Total_family_cost += 15
print(f'Total family ticket price is : {Total_family_cost} $')

# Exercise 2 : Cinemax #2 using reduce
from functools import reduce
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
reduced_list= reduce(lambda acc, age: acc + (0 if age < 3 else 10 if age <= 12 else 15), family.values(), 0)
print("Total family ticket price (using reduce):", reduced_list,"$")

# Exercise 3: Zara

brand = {'name': 'Zara', 
'creation_date': 1975,
'creator_name': 'Amancio Ortega Gaona',
'type_of_clothes': ['men', 'women', 'children', 'home'], 
'international_competitors': ['Gap', 'H&M', 'Benetton'],
'number_stores': 7000, 
'major_color': 
    {'France': 'blue', 
    'Spain': 'red', 
    'US': ['pink', 'green']}
}

brand['number_stores']= 2
print(f'Zara clients are {brand['type_of_clothes']}')
brand['country_creation']= 'Spain'
if 'international_competitors' in brand:
    brand['international_competitors'].append('<Desigual')
del brand['creation_date']
print(brand['international_competitors'][-1])
print(brand['major_color']['US'])
print(len(brand))
print(brand.keys())
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}
print(brand)
brand.update(more_on_zara)
print(brand['number_stores'])

print(brand)

# the number_stores has updated to 10000, because we used the update method.


# Exercise 4 : Some Geography

def describe_city(city, country= 'morocco'):
    print(f'{city} is in {country}')
describe_city('Reykjavik', 'Iceland')


# Exercise 5 : Random

import random

def guess_number(user_number):
    if user_number < 1 or user_number > 100:
        print("Please enter a number between 1 and 100.")
        return
    
    random_number = random.randint(1, 100)
    
    if user_number == random_number:
        print("Congratulations! You guessed the right number!")
    else:
        print("Sorry, wrong guess.")
        print(f"Your number: {user_number}")
        print(f"Random number: {random_number}")

num = int(input("Enter a number between 1 and 100: "))
guess_number(num)


# Exercise 6 : Random

def make_shirt(size="Large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

make_shirt()
make_shirt(size="Medium")
make_shirt(text="Code every day!")
make_shirt(size="Small", text="Python!")


# Exercise 7 : Temperature Advice


def get_random_temp():
    return random.randint(-10, 40)

print(get_random_temp())
def get_random_temp(season):
    
    if season == "spring":
        return random.randint (15,25) 
    elif season == "summer":
        return random.randint (25,40) 
    elif season == "autumn":
        return random.randint (10,20) 
    elif season == "winter":
        return random.randint (-5, 15) 
    else:
        return random.randint (-10, 40) 
    
def main():
    season = input("Type season :" )

    temp = get_random_temp(season)
    print(f'The temperature right now is {temp} degrees Celsius.')

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= temp <=16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 < temp <=23:
        print("Fine day")
    elif 24 <= temp <=32:
        print("Nice day")
    else:
        print("the weather is hot")

main()

# Exercise 8 : Star Wars Quiz

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
    
def quiz():
    correct = 0
    incorrect = 0
    wrong = []
    for item in data:
        answer = input(item["question" ]).strip()
        
        if answer.lower() == item["answer"].lower():
            correct += 1
        else:
            incorrect += 1
            wrong.append(item["question"])
    return correct, incorrect, wrong
def affichage(correct, incorrect, wrong):
    print(f'correct ancwers are : {correct}')
    print(f'incorrect ancwers are : {incorrect}')
    print(f'wrong questions are : {wrong}')
correct, incorrect, wrong = quiz()
affichage(correct, incorrect, wrong)

    




    




