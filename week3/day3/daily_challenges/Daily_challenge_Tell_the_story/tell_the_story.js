const form = document.getElementById("libform");
const storySpan = document.getElementById("story");

const storyTemplates = [
  (noun, adj, person, verb, place) =>
    `${person} took a ${adj} ${noun} and decided to ${verb} in ${place}.`,

  (noun, adj, person, verb, place) =>
    `In ${place}, ${person} found a ${adj} ${noun} and tried to ${verb} it.`,

  (noun, adj, person, verb, place) =>
    `Once upon a time, ${person} wanted to ${verb} with a ${adj} ${noun} near ${place}.`,
];

let currentValues = {};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();


  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all fields!");
    return;
  }

  currentValues = { noun, adjective, person, verb, place };

  const randomIndex = Math.floor(Math.random() * storyTemplates.length);
  storySpan.textContent = storyTemplates[randomIndex](
    noun,
    adjective,
    person,
    verb,
    place
  );
});



// Bonus:

const shuffleBtn = document.getElementById("shuffle");
shuffleBtn.addEventListener("click", function () {
  if (!currentValues.noun) {
    alert("First submit your words!");
    return;
  }
  const { noun, adjective, person, verb, place } = currentValues;
  const randomIndex = Math.floor(Math.random() * storyTemplates.length);
  storySpan.textContent = storyTemplates[randomIndex](
    noun,
    adjective,
    person,
    verb,
    place
  );
});
