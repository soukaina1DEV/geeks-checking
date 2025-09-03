// Exercise 1


// 1. Retrieve h1 and console.log it

const h1 = document.querySelector("h1");
console.log(h1);

// 2. Remove the last paragraph in <article>
const article = document.querySelector("p:last-of-type");
article.remove();

// 3. Change background color of h2 to red on click
const h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
});

// // 4. Hide h3 when clicked (display: none)
const h3 = document.querySelector("h3");
h3.addEventListener("click", () => {
  h3.style.display = "none";
});

// // 5. Button: make all paragraphs bold
const boldBtn = document.getElementById("boldBtn");
boldBtn.addEventListener("click", () => {
  const paragraphs = document.querySelectorAll("article p");
  paragraphs.forEach((p) => {
    p.style.fontWeight = "bold";
  });
});

// BONUS 1: Hover on h1 → random font size
h1.addEventListener("mouseover", () => {
  const randomSize = Math.floor(Math.random() * 100) + "px";
  h1.style.fontSize = randomSize;
});

// BONUS 2: Hover on 2nd paragraph → fade out
const secondParagraph = document.querySelectorAll("article p")[1];
secondParagraph.addEventListener("mouseover", () => {
  secondParagraph.classList.add("fade");
});


// Exercise 2



// 1. Retrieve the form and log it
const frm = document.querySelector("form");
console.log(frm);

// 2. Retrieve the inputs by their id and log them
const fnameById = document.getElementById("fname");
const lnameById = document.getElementById("lname");
console.log(fnameById, lnameById);

// 3. Retrieve the inputs by their name attribute and log them
const fnameByName = document.getElementsByName("firstname")[0];
const lnameByName = document.getElementsByName("lastname")[0];
console.log(fnameByName, lnameByName);

// 4. Handle form submit
frm.addEventListener("submit", (event) => {
  // Prevent the default behaviour (refresh page)
  event.preventDefault();

  const firstName = fnameById.value.trim();
  const lastName = lnameById.value.trim();
  console.log(firstName);

  // Make sure they are not empty
  if (firstName === "" || lastName === "") {
    alert("Please fill in both fields!");
    return;
  }

  // Select the UL
  const ul = document.querySelector(".usersAnswer");
  ul.innerHTML = ""; // clear old answers

  // Create li for first name
  const li1 = document.createElement("li");
  li1.textContent = firstName;
  ul.appendChild(li1);

  // Create li for last name
  const li2 = document.createElement("li");
  li2.textContent = lastName;
  ul.appendChild(li2);
});



// 🌟 Exercise 3 : Transform the sentence

function getBoldItems() {
  let allBoldItems = [];
  let strongu = document.querySelectorAll("p strong");
  strongu.forEach((element) => {
    var rftgyhunji = element.textContent;
    allBoldItems.push(rftgyhunji);
  });
  console.log(allBoldItems);
}
getBoldItems();

function highlight() {
  let strongE = document.querySelectorAll("p strong");
  strongE.forEach((element) => {
    element.style.color = "blue";
  });
}
highlight();

function returnItemsToDefault() {
  let strongE = document.querySelectorAll("p strong");
  strongE.forEach((element) => {
    element.style.color = "black";
  });
}

returnItemsToDefault();

getBoldItems();
let parag = document.querySelector("p");
parag.addEventListener("mouseover", highlight); //reference
parag.addEventListener("mouseout", returnItemsToDefault);

// 🌟 Exercice 4 : Volume of a sphere

let form = document.getElementById("MyForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let r = document.getElementById("radius").value;
  r = Number(r);

  let volume = (4 / 3) * Math.PI * Math.pow(r, 3);

  document.getElementById("volume").value = volume.toFixed(2);
});
