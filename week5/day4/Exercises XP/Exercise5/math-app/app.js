const functions = require("./math.js");
const _ = require("lodash");
const numbers = [1, 2, 3, 4, 5, 6];
const chunked = _.chunk(numbers, 2);
const maxNumber = _.max(numbers);
console.log("Chunked array:", chunked);
console.log("Max number:", maxNumber);
console.log(functions.add(5, 3));
console.log(functions.multiple(5, 3));
