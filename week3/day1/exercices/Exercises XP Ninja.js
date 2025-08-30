// Exercise 1 : Checking the BMI

// Hint:
// 1.You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.
// Create two objects, each object should hold a person’s details. Here are the details:

// FullName
// Mass
// Height

// 2.Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

const person1 = {
  FullName: "Soukaina El Fajjaj",
  Mass: 60,
  Height: 1.70,
  BMI: function(){
    return this.Mass / (this.Height * this.Height);
  }
};


const person2 = {
  FullName: "Asmaa Mounir",
  Mass: 67,
  Height: 1.68,
  BMI: function () {
    return this.Mass / (this.Height * this.Height);
  }
};

console.log(person1.FullName, person1.BMI());
console.log(person2.FullName, person2.BMI());


// 3.Outside of the objects, create a JS function that compares the BMI of both objects.
// 4.Display the name of the person who has the largest BMI.


function compareFunction(){
    if (person1.BMI() > person2.BMI()){
        console.log(`${person1.FullName} has the highest BMI`);

    }  else {
        console.log(`${person2.FullName} has the highest BMI`);
    }
}

compareFunction()




// Exercise 2 : Grade Average

// 1.Create a function called findAvg(gradesList) that takes an argument called gradesList.
// 2.Your function must calculate and console.log the average.


gradesList = [70, 80, 90];
function findAvg(gradesList){

    let sum = 0;
    for (let i = 0 ; i < gradesList.length ; i++){
    sum += gradesList[i] 
    }

    return sum / gradesList.length;
}

avg = findAvg(gradesList);
console.log(avg);

// 3.If the average is above 65 let the user know they passed

if (avg > 65) {
    console.log("Congratulation! you passed");

} else {
    console.log("You failed and must repeat the course");    
}
