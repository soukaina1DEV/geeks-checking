const characterDiv = document.getElementById("character");
const btn = document.getElementById("find-btn");

const fetchCharacter = async () => {
  try {
    // Loader message
    characterDiv.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Loading...`;

    // Random ID (1-83)
    const randomId = Math.floor(Math.random() * 83) + 1;
    const url = `https://www.swapi.tech/api/people/${randomId}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const person = data.result.properties;

    // Fetch homeworld
    const homeRes = await fetch(person.homeworld);
    const homeData = await homeRes.json();

    // Display character info
    characterDiv.innerHTML = `
      <h2>${person.name}</h2>
      <p><strong>Height:</strong> ${person.height}</p>
      <p><strong>Gender:</strong> ${person.gender}</p>
      <p><strong>Birth Year:</strong> ${person.birth_year}</p>
      <p><strong>Home World:</strong> ${homeData.result.properties.name}</p>
    `;
  } catch (error) {
    characterDiv.innerHTML = `<p style="color: red;">❌ Could not fetch character. Try again!</p>`;
    console.error("Error fetching data:", error);
  }
};

btn.addEventListener("click", fetchCharacter);
