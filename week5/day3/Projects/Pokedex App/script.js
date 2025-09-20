const pokemonImage = document.getElementById("pokemon-image");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonHeight = document.getElementById("pokemon-height");
const pokemonWeight = document.getElementById("pokemon-weight");
const pokemonType = document.getElementById("pokemon-type");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const randomButton = document.getElementById("random");
let currentPokemonId = 1;
prevButton.addEventListener("click", () => {
  if (currentPokemonId > 1) {
    currentPokemonId--;
    fetchPokemon(currentPokemonId);
  }
});
nextButton.addEventListener("click", () => {
  if (currentPokemonId < 898) {
    currentPokemonId++;
    fetchPokemon(currentPokemonId);
  }
});
randomButton.addEventListener("click", () => {
  currentPokemonId = Math.floor(Math.random() * 898) + 1;
  fetchPokemon(currentPokemonId);
});
async function fetchPokemon(id) {
  try {
    pokemonName.textContent = "Loading...";
    pokemonImage.src = "";
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    pokemonImage.src = data.sprites.front_default || "default.png";
    pokemonName.textContent = data.name;
    pokemonId.textContent = `ID: ${data.id}`;
    pokemonHeight.textContent = `Height: ${data.height}`;
    pokemonWeight.textContent = `Weight: ${data.weight}`;
    pokemonType.textContent = `Type: ${data.types
      .map((typeInfo) => typeInfo.type.name)
      .join(", ")}`;
  } catch (error) {
    pokemonName.textContent = "Oh no! That Pokémon isn’t available…";
    pokemonImage.src = "";
    pokemonId.textContent = "";
    pokemonHeight.textContent = "";
    pokemonWeight.textContent = "";
    pokemonType.textContent = "";
  }
}
