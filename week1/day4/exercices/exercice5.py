# Exercise 5 : TheIncredibles Family

from exercices4 import Family


class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member["name"] == name:
                if member["age"] >= 18:
                    print(f"{member['name']}'s power is: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old!")
                return
        print(f"No member found with name {name}")

    def incredible_presentation(self):
        print("Here is our powerful family **")
        super().family_presentation()



incredibles_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredible_family = TheIncredibles("Incredibles", incredibles_members)


incredible_family.incredible_presentation()


incredible_family.use_power("Michael")
incredible_family.use_power("Sarah")


incredible_family.born(
    name="Jack",
    age=1,
    gender="Male",
    is_child=True,
    power="Unknown Power",
    incredible_name="BabyJack"
)


incredible_family.incredible_presentation()


try:
    incredible_family.use_power("Jack")
except Exception as e:
    print(e)


