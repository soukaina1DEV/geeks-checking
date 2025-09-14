const form = document.getElementById("user-form");
const output = document.getElementById("output");

// Event submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;

  
  const user = {
    name: name,
    lastname: lastname,
  };

  const jsonUser = JSON.stringify(user);

  output.textContent = jsonUser;
});
