// Exercise 1 : Find the numbers divisible by 23

function displayNumbersDivisible(){
    sum = 0
    for (num = 0 ; num <=500 ; num++)
        if (num % 23 == 0){
            console.log(num);
            sum += num;
        } 
    return `Sum : ${sum}`            
}

console.log(displayNumbersDivisible());




// 5.Bonus: Add a parameter divisor to the function.


function displayNumbersDivisible(divisor) {
  sum = 0;
  for (num = 0; num <= 500; num++)
    if (num % divisor == 0) {
      console.log(num);
      sum += num;
    }
  return `Sum : ${sum}`;
}

console.log(displayNumbersDivisible(40));




//  Exercise 2 : Shopping List

// 1.Add the stock and prices objects to your js file.

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
}; 

// 2.Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. 
// It means that you have 1 banana, 1 orange and 1 apple in your cart.

let shoppingList = ["banana", "orange", "apple"]


// 3.Create a function called myBill() that takes no parameters.

// 4.The function should return the total price of your shoppingList. In order to do this you must follow these rules:

// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1



function myBill() {
    let total=0;
    for (let i=0 ; i < shoppingList.length ; i++){
        let item = shoppingList[i];
        if (item in stock && stock[item] > 0){
            
            total+= prices[item];
            stock[item]--;
                   
        }
    }  
    console.log(total);
    return total;
}
myBill();
console.log(stock);



// Exercise 3 : What’s in my wallet ?


function changeEnough(itemPrice, amountOfChange){
      
    
    sumChange = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.1 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01;
    return sumChange >= itemPrice; 
    
    }
    
console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2,100,0,0]));  // false


// Exercise 4 : Vacations Costs


function hotelCost() {
  let nights;
  do {
    nights = prompt("How many nights would you like to stay in the hotel?");
  } while (isNaN(nights) || nights === "" || nights === null);

  return Number(nights) * 140;
}

function planeRideCost() {
  let destination;
  do {
    destination = prompt("What is your destination?");
  } while (!isNaN(destination) || destination === "" || destination === null);

  destination = destination.toLowerCase();
  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

function rentalCarCost() {
  let days;
  do {
    days = prompt("How many days would you like to rent the car?");
  } while (isNaN(days) || days === "" || days === null);

  days = Number(days);
  let cost = days * 40;

  if (days > 10) {
    cost *= 0.95; // 5% discount
  }

  return cost;
}

function totalVacationCost() {
  let hotel = hotelCost();
  let plane = planeRideCost();
  let car = rentalCarCost();

  console.log(
    `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`
  );
  console.log(`Total vacation cost: $${hotel + plane + car}`);
}

// Call the function
totalVacationCost();



// Exercise 5 : Users

var container = document.getElementById("container");
console.log(container);

document.querySelectorAll("ul")[0].children[1].textContent = "Richard";

document.querySelectorAll('ul')[1].children[1].remove();

var ul = document.querySelectorAll('ul')
for (list of ul){
    list.children[0].textContent = "Soukaina"
}


allUL.forEach(ul => {
  ul.classList.add("student_list");
});


allUL[0].classList.add("university", "attendance");


container.style.backgroundColor = "lightblue";
container.style.padding = "10px";


allUL[1].lastElementChild.style.display = "none";


allUL[0].children[1].style.border = "2px solid black";


document.body.style.fontSize = "20px";

// Bonus: 
if (container.style.backgroundColor === "lightblue") {
  let users = [];
  allUL.forEach(ul => {
    users.push(ul.children[0].textContent);
  });
  alert(`Hello ${users[0]} and ${users[1]}`);
}



// Exercise 6 : Change the navbar

const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
newLi.textContent = "Logout";
nav.querySelector("ul").appendChild(newLi);

const ul = nav.querySelector("ul");
console.log("First:", ul.firstElementChild.textContent);
console.log("Last:", ul.lastElementChild.textContent);


// Exercise 7: My Book List

const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    alreadyRead: true,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
    alreadyRead: false,
  },
];

const section = document.querySelector(".listBooks");

allBooks.forEach((book) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${book.title} written by ${book.author}</p>`;
  const img = document.createElement("img");
  img.src = book.image;
  div.appendChild(img);
  if (book.alreadyRead) div.style.color = "red";
  section.appendChild(div);
});