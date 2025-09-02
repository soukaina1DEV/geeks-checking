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


