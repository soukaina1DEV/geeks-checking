// Daily challenge: Planets


// 1. Array of planets (name, color, moons)
const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "brown", moons: 79 },
  { name: "Saturn", color: "goldenrod", moons: 82 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "darkblue", moons: 14 }
];

// 2. Get section
const section = document.querySelector(".listPlanets");

// 3. Render planets
planets.forEach(planet => {
  // create planet div
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;

  // 4. Add moons
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");
    // position moons around randomly
    moon.style.top = `${Math.random() * 80}px`;
    moon.style.left = `${100 + (i * 35)}px`;
    planetDiv.appendChild(moon);
  }

  // append planet to section
  section.appendChild(planetDiv);
});
