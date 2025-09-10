// Exercise 1 : Merge Words

// Currying version

const mergeWords = (string) => (nextString) =>
  nextString === undefined ? string : mergeWords(string + " " + nextString);


// examples
console.log(mergeWords("There")("is")("no")("spoon.")()); // "There is no spoon."

