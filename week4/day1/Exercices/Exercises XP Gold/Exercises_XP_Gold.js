let landscape = function () {
  let result = "";

  let flat = function (x) {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  };

  let mountain = function (x) {
    result = result + "/";
    for (let counter = 0; counter < x; counter++) {
      result = result + "'";
    }
    result = result + "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

landscape();


// 1. OUTPUT : ____/''''\____

flat(4); // ghayzid 4 dyal "_" => "____"
mountain(4); // ghayzid "/" mn ba3d ghayzid 4 dyal "'" mn ba3d ghayzid "\\" => /''''\
flat(4); // ghayzid 4 dyal "_" => "____"



// nested arrow functions  landscape1 === landscape

const landscape1 = () => {
  let result = "";

  const flat = (x) => {
    for (let count = 0; count < x; count++) {
      result += "_";
    }
  };

  const mountain = (x) => {
    result += "/";
    for (let counter = 0; counter < x; counter++) {
      result += "'";
    }
    result += "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

console.log(landscape1()); // ____/''''\____



// Exercise 2 : Closure

const addTo = (x) => (y) => x + y;
const addToTen = addTo(10);
addToTen(3);

// OUTPUT : 13


// Exercise 3 : Currying
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);

// OUTPUT : 31


// Exercise 4 : Currying
const curriedSumm = (a) => (b) => a + b;
const add = curriedSumm(5);
add(12);

// OUTPUT : 17


// Exercise 5 : Composing
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);

// OUTPUT : 16
