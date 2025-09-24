const products = require("./products.js");
function displayProductDetails(nameproduct) {
  const product = products.find((p) => p.name === nameproduct);
  if (product) {
    console.log(`Product Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Category: ${product.category}`);
  } else {
    console.log("Product not found.");
  }
}
displayProductDetails("Smartphone");
displayProductDetails("Tablet"); // This one does not exist
