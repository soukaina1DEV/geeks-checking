#Challenge 1

user_number = int(input("Enter the number: " ))
user_length = int(input("Enter the length: " ))
new_list = []
for number in range(1, user_length+1):
    new_list.append(user_number * number)
    
print(new_list)

#Challenge 2


user_text = input("user's word: ")

result = ""
for i in range(len(user_text)):
    if i == 0 or user_text[i] != user_text[i - 1]:
        result += user_text[i]

print(result)

