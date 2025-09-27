function returnNumbers(str) {
  const matches = str.match(/\d/g);

  if (matches) {
    return matches.join(""); 
  } else {
    return ""; 
  }
}

console.log(returnNumbers("k5k3q2g5z6x9bn")); 
console.log(returnNumbers("abc")); 
