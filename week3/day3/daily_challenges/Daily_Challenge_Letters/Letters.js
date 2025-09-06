const input = document.getElementById("textInput");

input.addEventListener("input", () => {
  input.value = input.value.replace(/[^a-zA-Z]/g, "");
});
