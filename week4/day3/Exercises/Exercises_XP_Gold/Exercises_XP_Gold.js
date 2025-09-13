// Exercise 1 : print Full Name

function printFullName({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

console.log(printFullName({ first: "Elie", last: "Schoppik" }));
// OUTPUT: Your full name is Elie Schoppik





// Exercise 2 : keys and values
function keysAndValues(obj) {

  // 1.
  let keys = Object.keys(obj).sort(); 
  
  // 2. 
  let values = keys.map(key => obj[key]); 
  
  // 3. 
  return [keys, values];
}


console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
// [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
// [["key1", "key2", "key3"], [true, false, undefined]]




// Exercise 3 : Counter class

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
