// Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review about arrays

// 1. Write code to remove “Greg” from the people array.

people.shift();

// 2.Write code to replace “James” to “Jason”.

people[people.indexOf("James")] = "Jason";

// 3.Write code to add your name to the end of the people array.

people.push("Soukaina");

// 4.Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log(people.indexOf("Mary"));

// 5.Write code to make a copy of the people array using the slice method.

// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

const copy = people.slice(1,people.length-1)
console.log(copy);

// 6.Write code that gives the index of “Foo”. Why does it return -1 ?

console.log(people.indexOf("Foo"))
// return -1 because "Foo" is not exist in array poeple


// 7.Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?


const lastElement = people[people.length-1]
console.log("The last element is :", lastElement);


// Part II - Loops
// 1.Using a loop, iterate through the people array and console.log each person.

for (let i = 0; i < people.length ; i++)
console.log(people[i]);

// 2.Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

for (let i =0; i < people.length ; i++){
    console.log(people[i]);

    if (people[i] == "Devon") {
        break;
    }
}   

console.log(people);



// Exercise 2 : Your favorite colors

// Instructions
// 1.Create an array called colors where the value is a list of your five favorite colors.

const colors = ["white", "blue", "red", "orange", "black"] 

// 2.Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

for(let i = 0 ; i < colors.length ; i++){
  console.log(`My #${i+1} choice is ${colors[i]}`);
}

// 3.Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus


const suffixes = ["st", "nd", "rd", "th", "th"]

for (let i = 0; i < colors.length; i++) {
      console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}




// Exercise 3 : Repeat the question

// Instructions

// 1.Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

let numUser = Number(prompt("Enter your number: "))
console.log(typeof(numUser));

// 2.While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

while (numUser < 10) {
    numUser = prompt("Enter a new number greater than or equal to 10 :");
}




// Exercise 4 : Building Management
// Review about objects

// 1.Copy and paste the above object to your Javascript file.


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


// 2.Console.log the number of floors in the building.

console.log("the number of floors in the building are : ", building["numberOfFloors"]);

// 3.Console.log how many apartments are on the floors 1 and 3.

console.log("the number of apartments on the floor 1 are : ",building.numberOfAptByFloor["firstFloor"]);
console.log("the number of apartments on the floor 3 are : ",building.numberOfAptByFloor["thirdFloor"]);


// 4.Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log("the name of the second tenant is : " + building.nameOfTenants[1] + " and the number of rooms he has in his apartment are : ", building.numberOfRoomsAndRent.dan[0]);

// 5.Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


sum = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];

if (sum > building.numberOfRoomsAndRent.dan[1]){

    newDansRent = building.numberOfRoomsAndRent.dan[1] + 1200;
    console.log("The new Dan’s rent is : ", newDansRent);

} else {
    console.log("the sum of Sarah’s and David’s rent is not bigger than Dan’s rent"); 
}




// Exercise 5 : Family

// 1.Create an object called family with a few key value pairs.


const family = {
  father: "Ahmed",
  mother: "Salma",
  son: "Youssef",
  daughter: "Lina",
  pet: "Cat",
};

// 2.Using a for in loop, console.log the keys of the object.

for (key in family) {
    console.log(key);
}

// 3.Using a for in loop, console.log the values of the object.


for (key in family) {
  console.log(family[key]);
}



// Exercise 6 : Rudolf

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}


// 1.Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”


let sentence = "";

for (let key in details) {
  sentence += key + " " + details[key] + " ";
}

console.log(sentence.trim());




// Exercise 7 : Secret Group

// Instructions

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 1.A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters

const societyName = names.map(name => name[0]).sort().join('');

// 2.Console.log the name of their secret society. The output should be “ABJKPS”

console.log("The secret society's name : ", societyName);








