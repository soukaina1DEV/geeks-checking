# Step 1: Create the Farm Class
class Farm:
    # Step 2: Implement the __init__ Method
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}
    # Step 3: Implement the add_animal Method
    def add_animal(self, animal_type, count = 1):
        
            if animal_type in self.animals:
                self.animals[animal_type]+= count
            else:
                self.animals[animal_type] = count
    # Step 4: Implement the get_info Method
    def get_info(self):
            print("McDonald's farm \n")
            for animal_type, count in self.animals.items():
                print(f"{animal_type:<10} : {count}")
            print("\n E-I-E-I-O!")
    # Step 6: Implement the get_animal_types Method
    def get_animal_types(self):
    
        return sorted(self.animals.keys())


    # Step 7: Implement the get_short_info Method
    def get_short_info(self):
        anim_list = []
        for anml in self.get_animal_types():
            if  self.animals[anml]> 1:
                anim_list.append(anml + "s")
            else:
                anim_list.append(anml)

        animals_str = ", ".join(anim_list[:-1]) + " and " + anim_list[-1]
        print(f"{self.name}'s farm has {animals_str}.")
        
            


# Step 5: Test Your Code
macdonald = Farm('McDonald')
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.get_info()
macdonald.get_animal_types()
macdonald.get_short_info()