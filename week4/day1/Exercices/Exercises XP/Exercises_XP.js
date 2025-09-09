// Exercise 1 : Scope

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// // #1.1 - run in the console:
funcOne()    // OUTPUT: inside the funcOne function 3

// #1.2 What will happen if the variable is declared 
// with const instead of let ?   //Uncaught TypeError: Assignment to constant



//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()  // OUTPUT: inside the funcThree function 0
funcTwo()    // OUTPUT: walo 7it lfunction maktreturni 7tta 7aja omadrnach lconsole
funcThree()    // OUTPUT: OUTPUT: inside the funcThree function 0

// #2.2 What will happen if the variable is declared 
// with const instead of let ?    //Uncaught TypeError: Assignment to constant




//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// // #3.1 - run in the console:
funcFour()
funcFive()  // OUTPUT: inside the funcFive function hello




//#4
// let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// // #4.1 - run in the console:
funcSix()  // OUTPUT: inside the funcSix function test

// #4.2 What will happen if the variable is declared 
// with const instead of let ?    // the same thing as let




// //#5
// let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console   // OUTPUT: in the if block 5
                                        // OUTPUT: outside of the if block
// #5.2 What will happen if the variable is declared 
// with const instead of let ?    // the same thing as let






// Exercise 2 : Ternary operator


// function winBattle() {
//   return true;
// }

// 1.Transform the winBattle() function to an arrow function.
const winBattle = () => true

// 2.Create a variable called experiencePoints.
// 3.Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
let experiencePoints = winBattle() ? 10 : 1;

// 4.Console.log the experiencePoints variable.
console.log(experiencePoints);




//  Exercise 3 : Is it a string ?


// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output

const isString = (value) => typeof value === "string";

console.log(isString([1, 2, 4, 0])); // false
console.log(isString("hello"));   // true
console.log(isString(123));       // false
console.log(isString(true));      // false
console.log(isString("123"));     // true



// Exercise 4 : Find the sum

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (a, b) => a + b;

console.log(sum(3, 4));  // 7
console.log(sum(10, 20)); // 30



// Exercise 5 : Kg and grams

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// 1. 

function kgToGrams(weightKg) {
  return weightKg * 1000;
}

console.log(kgToGrams(5)); // 5000

// 2.

const kgToGramsExp = function(weightKg) {
  return weightKg * 1000;
};

console.log(kgToGramsExp(3)); // 3000

// 3.

// Function Declaration can be hoisted, Function Expression cannot.

// 4.

const kgToGramsArrow = weightKg => weightKg * 1000;

console.log(kgToGramsArrow(2)); // 2000




// Exercice 6:Fortune Teller

 (function (children, partner, location, job) {
    
   let message = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
   document.getElementById("fortune").textContent = message;

 })(3, "Sofia", "Morocco", "Web Developer");




// // 🌟 Exercise 7 : Welcome

(function (userName) {
  const navbarUser = document.getElementById("navbar-user");

  const userDiv = document.createElement("div");
  userDiv.classList.add("user-info");

  const userIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  userIcon.setAttribute("viewBox", "0 0 24 24");
  userIcon.innerHTML = `
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V22h19.2v-2.8c0-3.2-6.4-4.8-9.6-4.8z"/>
  `;

  const userText = document.createElement("span");
  userText.textContent = userName;

  userDiv.appendChild(userIcon);
  userDiv.appendChild(userText);
  navbarUser.appendChild(userDiv);
})("John");



// <!-- Exercise 8 : Juice Bar -->

function makeJuice(size) {
  function addIngredients(ing1, ing2, ing3) {
    const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
    document.getElementById("output").textContent = sentence;
  }

  addIngredients("apple", "banana", "orange");
}

makeJuice("large");



function makeJuice(size) {
  let ingredients = []; 

  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
    const sentence = `The client wants a ${size} juice, containing ${ingredients.join(
      ", "
    )}.`;
    document.getElementById("output").textContent = sentence;
  }

  addIngredients("apple", "banana", "orange");
  addIngredients("mango", "kiwi", "pineapple");

  displayJuice();
}

makeJuice("medium");
