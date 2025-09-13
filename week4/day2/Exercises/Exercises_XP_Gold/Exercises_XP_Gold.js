// Exercise 1 : Analyzing the map method
// Analyze this code, what will be the output ?

[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});

// OUTPUT :[2, 4, 6]



// Exercise 2: Analyzing the reduce method
// Analyze this code, what will be the output ?

[[0, 1], [2, 3]].reduce((acc, cur) => {
    return acc.concat(cur);}, [1, 2],);

// OUTPUT :[1,2,0,1,2,3]



// Exercise 3 : Analyze this code
// Using this code:

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

// What is the value of i ?
// 0 1 2 3 4 5

//OUTPUT :  // 1 0
            // 2 1
            // 4 2
            // 5 3
            // 8 4
            // 9 5



// Exercise 4 : Nested arrays
// 1.

const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const flatArray = array.flat(2);
console.log(flatArray); 
// [1, 2, 3, [4], [5]]


// Bonus
const flatArray1 = [[1], [2], [3], [[[4]]], [[[5]]]].flat(2);


// 2.
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

const joinedGreeting = greeting.map(words => words.join(" "));
console.log(joinedGreeting);
// ["Hello young grasshopper!", "you are", "learning fast!"]


// 3.
const fullSentence = joinedGreeting.join(" ");
console.log(fullSentence);
// "Hello young grasshopper! you are learning fast!"


// 4.
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

const untrapped = trapped.flat(Infinity);
console.log(untrapped);
// [3]
