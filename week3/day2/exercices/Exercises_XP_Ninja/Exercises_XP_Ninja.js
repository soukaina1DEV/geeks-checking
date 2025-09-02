// Exercise 1: Random Number

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number is:", randomNumber);

for (let i = 0; i <= randomNumber; i += 2) {
  console.log(i);
}


// Exercise 2: Capitalized letters

function capitalize(str) {
  let evenCaps = "";
  let oddCaps = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evenCaps += str[i].toUpperCase();
      oddCaps += str[i];
    } else {
      evenCaps += str[i];
      oddCaps += str[i].toUpperCase();
    }
  }

  return [evenCaps, oddCaps];
}

console.log(capitalize("abcdef"));


// Exercise 3 : Is palindrome?

function isPalindrome(str) {
  str = str.toLowerCase();
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));


// Exercise 4 : Biggest Number

function biggestNumberInArray(arr) {
  const nums = arr.filter((n) => typeof n === "number");
  if (nums.length === 0) return 0;
  return Math.max(...nums);
}

console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99]));
console.log(biggestNumberInArray(["a", 3, 4, 2]));
console.log(biggestNumberInArray([]));


// Exercise 5: Unique Elements

function uniqueElements(arr) {
  let result = [];
  for (let i of arr) {
    if (!result.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(uniqueElements([1, 2, 3, 3, 3, 3, 4, 5]));
// [1, 2, 3, 4, 5]

// Exercise 6 : Calendar

function createCalendar(year, month) {
  const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.textAlign = "center";

  const headerRow = document.createElement("tr");
  for (let d of days) {
    const th = document.createElement("th");
    th.textContent = d;
    th.style.border = "1px solid black";
    th.style.padding = "5px";
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  let date = new Date(year, month - 1, 1);
  let firstDay = (date.getDay() + 6) % 7;

  let lastDay = new Date(year, month, 0).getDate();

  let row = document.createElement("tr");

  for (let i = 0; i < firstDay; i++) {
    let td = document.createElement("td");
    td.style.border = "1px solid black";
    td.style.padding = "5px";
    row.appendChild(td);
  }

  for (let day = 1; day <= lastDay; day++) {
    let td = document.createElement("td");
    td.textContent = day;
    td.style.border = "1px solid black";
    td.style.padding = "5px";
    row.appendChild(td);

    if ((firstDay + day) % 7 === 0) {
      table.appendChild(row);
      row = document.createElement("tr");
    }
  }

  if (row.children.length > 0) {
    table.appendChild(row);
  }

  document.body.appendChild(table);
}

createCalendar(2012, 9);
