// 🌟 Exercise 1: Timer



// Part I

setTimeout(() => {
  alert("Hello World");
}, 2000);

// Part II

setTimeout(() => {
  const container = document.getElementById("container");
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
}, 2000);

// Part III 

let intervalId = setInterval(() => {
  const container = document.getElementById("container");
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);


  if (container.querySelectorAll("p").length >= 5) {
    clearInterval(intervalId);
  }
}, 2000);


document.getElementById("clear").addEventListener("click", () => {
  clearInterval(intervalId);
});










// 🌟 Exercise 2 : Move the box

let animate = document.getElementById('animate');
let container = document.getElementById('container');

function myMove() {
  let pos = 0;
  let id = setInterval(frame, 1);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      animate.style.left = pos + 'px';
    }
  }
}
