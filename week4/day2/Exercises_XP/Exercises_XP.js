// 🌟 Exercise 1 : Colors

// 1.
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});


// 2.
if (colors.some((color) => color === "Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}




// 🌟 Exercise 2 : Colors #2


const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  let n = index + 1; 
  let suffix =
    n === 1
      ? ordinal[1]
      : n === 2
      ? ordinal[2]
      : n === 3
      ? ordinal[3]
      : ordinal[0];

  console.log(`${n}${suffix} choice is ${color}.`);
});



// Exercise 3 : Analyzing

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// OUTPUT: ["bread", "carrot", "potato", "chicken", "apple", "orange"]


// ------2------
const country = "USA";
console.log([...country]);

// OUTPUT: ["U", "S", "A"]


// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// OUTPUT: [undefined, undefined]



// 🌟 Exercise 4 : Employees

const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];


// 1. 
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);
// ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

// 2. 
const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");
console.log(fullStackResidents);
/*
[
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' }
]
*/

// 3. 
const fullStackLastNames = users
  .filter(user => user.role === "Full Stack Resident")
  .map(user => user.lastName);

console.log(fullStackLastNames);
// ["Bouley", "Alnaji", "Hajek"]




// 🌟 Exercise 5 : Star Wars

const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
const sentence = epic.reduce((acc, val) => acc + " " + val);
console.log(sentence);



// 🌟 Exercise 6 : Employees #2

const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

// 1. 
const passedStudents = students.filter((student) => student.isPassed);
console.log(passedStudents);
/*
[
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true }
]
*/

// 2. Bonus: 
students
  .filter((student) => student.isPassed)
  .forEach((student) => {
    console.log(
      `Good job ${student.name}, you passed the course in ${student.course}`
    );
  });



