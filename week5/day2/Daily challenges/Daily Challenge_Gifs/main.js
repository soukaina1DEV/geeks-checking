const form = document.getElementById("gifForm");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = searchInput.value.trim();
  if (!query) return;

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?tag=${query}&rating=g&api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const gifUrl = data.data.images.original.url;

    const gifBox = document.createElement("div");
    gifBox.classList.add("gifBox");

    const img = document.createElement("img");
    img.src = gifUrl;
    img.alt = query;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.addEventListener("click", () => gifBox.remove());

    gifBox.appendChild(img);
    gifBox.appendChild(deleteBtn);
    gifContainer.appendChild(gifBox);
  } catch (err) {
    console.error("Error fetching random GIF:", err);
  }
});

deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
