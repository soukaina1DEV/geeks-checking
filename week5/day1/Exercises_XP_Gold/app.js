// Exercise 1 : Promise.all()

// 3 promises
const promise1 = Promise.resolve(3);
const promise2 = 42; 
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo'); 
});

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); 
    // [3, 42, "foo"]
  })
  .catch(error => {
    console.error("Error caught:", error);
  });





// Exercise 2 : Analyse Promise.all()

// Analyse the code below - what will be the output ?

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);
Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });

// OUTPUT: [2, 4, 6];
