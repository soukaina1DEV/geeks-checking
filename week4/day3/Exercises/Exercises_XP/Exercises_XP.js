// 🌟 Exercise 1 : Location

// Analyze the code below. What will be the output?

const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;
console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// OUTPUT : I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// 🌟 Exercise 2: Display Student Info

function displayStudentInfo({ first, last }) {
  console.log(`Your full name is ${first} ${last}`);
}
displayStudentInfo({ first: "Elie", last: "Schoppik" });

//output : 'Your full name is Elie Schoppik'

// 🌟 Exercise 3: User & id

const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1:
let usersArray = Object.entries(users);
console.log(usersArray);
//output : [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// Part 2:
let updatedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
console.log(updatedUsersArray);
//output : [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// Exercise 4 : Person class

// Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}
const member = new Person("John");
console.log(typeof member);

//output : object

// 🌟 Exercise 5 : Dog class

// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Analyze the options below. Which constructor will successfully extend the Dog class?
// Option 2

// 🌟 Exercise 6 : Challenges
// 1.Evaluate these (ie True or False)

// [2] === [2]   // false
// {} === {}     // false

// 2.
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;

console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5

// `object1`, `object2`, and `object3` all point to the **same object in memory** → so any change in one of them is reflected in all.
// `object4` is a **different object** (even if it was created with the same initial value) → so it is not affected.

// 1.
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// 2.
class Mammal extends Animal {
  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// 3.
const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));
// Output: Moooo I'm a cow, named Lily and I'm brown and white
