// Exercise 1 : Dog age to Human years

const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Cuty",
    age: 5,
    type: "rabbit",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
  {
    name: "Rex",
    age: 10,
    type: "dog",
  },
];


// 1.
let sum = 0;

for (let animal of data) {
  if (animal.type === "dog") {
    sum += animal.age * 7; 
  }
}

console.log(sum); // 154


// 2.
const sumReduce = data.reduce((acc, animal) => {
  if (animal.type === "dog") {
    return acc + (animal.age * 7);
  }
  return acc;
}, 0);

console.log(sumReduce); // 154




// Exercise 2 : Email

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
const cleanEmail = userEmail3.trim();

console.log(cleanEmail);
// "cannotfillemailformcorrectly@gmail.com"




// Exercise 3 : Employees #3

const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];


const usersObject = {};

users.forEach((user) => {
  const fullName = `${user.firstName} ${user.lastName}`;
  usersObject[fullName] = user.role;
});

console.log(usersObject);




// Exercise 4 : Array to Object
// 1.

let letterCount = {};

for (let letter of letters) {
  if (letterCount[letter]) {
    letterCount[letter]++;  
  } else {
    letterCount[letter] = 1; 
  }
}

console.log(letterCount);
// { x: 1, y: 1, z: 2 }

// 2.
const letterCountReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1; 
  return acc;
}, {}); 

console.log(letterCountReduce);
// { x: 1, y: 1, z: 2 }


