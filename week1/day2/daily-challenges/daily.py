word = input("enter a word : ")

letter_indexes = {}
for index, letter in enumerate(word):
    if letter not in letter_indexes:
        letter_indexes[letter] = [index]
    else:
        letter_indexes[letter].append(index)

print(letter_indexes)