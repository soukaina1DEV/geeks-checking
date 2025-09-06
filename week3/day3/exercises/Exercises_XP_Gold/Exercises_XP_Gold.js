// Exercise 1 : Select a kind of Music



document.getElementById("genres").addEventListener("change", function() {
  console.log(this.value);
});
let select = document.getElementById("genres");
let option = document.createElement("option");
option.value = "classic";
option.text = "Classic";
select.add(option);
select.value = "classic";







// Exercise 2: Delete colors


const button = document.querySelector('input[type="button"]');

button.addEventListener("click", removecolor);

function removecolor() {
  let select = document.getElementById("colorSelect");
  select.remove(select.selectedIndex);
}

    



// Exercise 3 : Create a shopping list


let shoppingList = [];

const root = document.getElementById("root");

const form = document.createElement("form");

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter item...";

const addBtn = document.createElement("button");
addBtn.textContent = "AddItem";
addBtn.type = "submit"; 

form.appendChild(input);
form.appendChild(addBtn);

const clearBtn = document.createElement("button");
clearBtn.textContent = "ClearAll";
clearBtn.type = "button";

const list = document.createElement("ul");

root.appendChild(form);
root.appendChild(clearBtn);
root.appendChild(list);


function renderList() {
  list.innerHTML = ""; 
  shoppingList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function addItem(event) {
  event.preventDefault(); 
  const value = input.value.trim();
  if (value !== "") {
    shoppingList.push(value); 
    input.value = ""; 
    renderList(); 
  }
}

function clearAll() {
  shoppingList = []; 
  renderList(); 
}

form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearAll);


