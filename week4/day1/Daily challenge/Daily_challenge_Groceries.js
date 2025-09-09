let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// 1.
const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => console.log(fruit));
};

displayGroceries();
// pear
// apple
// banana


// 2.
const cloneGroceries = () => {
  let user = client;
  client = "Betty";

  console.log("user:", user); // John
  console.log("client:", client); // Betty
  // user doesn't change because it's string so it's primitive = pass by value

  let shopping = groceries;

  shopping.totalPrice = "35$";
  console.log("shopping.totalPrice:", shopping.totalPrice); // 35$
  console.log("groceries.totalPrice:", groceries.totalPrice); // 35$
  //  totalPrice of groceries changed because object = reference

  shopping.other.paid = false;
  console.log("shopping.other.paid:", shopping.other.paid); // false
  console.log("groceries.other.paid:", groceries.other.paid); // false
  //  paid of groceries changed because object = reference
};

cloneGroceries();

