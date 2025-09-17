const form = document.getElementById("cityForm");
const results = document.getElementById("results");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const lat1 = document.getElementById("lat1").value.trim();
  const lng1 = document.getElementById("lng1").value.trim();
  const lat2 = document.getElementById("lat2").value.trim();
  const lng2 = document.getElementById("lng2").value.trim();

  if (!lat1 || !lng1 || !lat2 || !lng2) {
    results.textContent = "⚠️ Please enter all coordinates.";
    return;
  }

  try {
    const [city1, city2] = await Promise.all([
      fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}&formatted=0`
      ).then((res) => res.json()),
      fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}&formatted=0`
      ).then((res) => res.json()),
    ]);

    const sunrise1 = new Date(city1.results.sunrise).toLocaleTimeString(
      "en-US",
      { hour: "2-digit", minute: "2-digit" }
    );
    const sunrise2 = new Date(city2.results.sunrise).toLocaleTimeString(
      "en-US",
      { hour: "2-digit", minute: "2-digit" }
    );

    results.innerHTML = `
      🌇 City 1 Sunrise: ${sunrise1}<br>
      🌇 City 2 Sunrise: ${sunrise2}
    `;
  } catch (error) {
    console.error("Error fetching sunrise data:", error);
    results.textContent = "❌ Error fetching sunrise data.";
  }
});
