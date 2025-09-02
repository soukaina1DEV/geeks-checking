// Exercise 1 : is_Blank

function isBlank(ch) {
  if (ch === null || ch === "") {
    return true;
  } else {
    return false;
  }
}
console.log(isBlank(""));
console.log(isBlank("abc"));

// Exercice 2:

function abbrevName(str) {
  let newStr = str.split(" ");
  let fiN = newStr[0];
  let laN = newStr[1][0];
  console.log(`${fiN} ${laN}.`);
}
abbrevName("Robin Singh");

// Exercise 3

function swapCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

console.log(swapCase("The Quick Brown Fox"));

// Exercise 4:

function isOmnipresent(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(value)) {
      return false;
    }
  }
  return true;
}

console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 3));
console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 4));

// Exercise 5:

// in index.html
