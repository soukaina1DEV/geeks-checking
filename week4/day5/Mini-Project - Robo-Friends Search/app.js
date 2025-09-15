// ===== Data =====
const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

// ===== DOM refs =====
const container = document.getElementById("robotContainer");
const searchBox = document.getElementById("searchBox");
const clearBtn = document.getElementById("clearBtn");
const resultMeta = document.getElementById("resultMeta");
const emptyState = document.getElementById("emptyState");

// ===== Utilities =====
const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function highlight(text, term) {
  if (!term) return text;
  const re = new RegExp(escapeRegExp(term), "ig");
  return text.replace(re, (m) => `<mark>${m}</mark>`);
}

function debounce(fn, delay = 200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

// ===== Render =====
function displayRobots(list, term = "") {
  container.innerHTML = "";
  const frag = document.createDocumentFragment();
  list.forEach((r) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${r.image}" alt="${r.name}">
      <h3>${highlight(r.name, term)}</h3>
      <p>@${r.username}</p>
      <p>${r.email}</p>
    `;
    frag.appendChild(card);
  });

  container.appendChild(frag);

  // meta + empty state
  resultMeta.textContent = `Showing ${list.length} result${
    list.length !== 1 ? "s" : ""
  }`;
  emptyState.hidden = list.length !== 0;
}

// ===== Filter =====
function runFilter(term) {
  const q = term.trim().toLowerCase();
  if (!q) {
    displayRobots(robots);
    return;
  }
  const filtered = robots.filter(
    (r) =>
      r.name.toLowerCase().includes(q) ||
      r.username.toLowerCase().includes(q) ||
      r.email.toLowerCase().includes(q)
  );
  displayRobots(filtered, q);
}

const debouncedFilter = debounce(runFilter, 180);

// events
searchBox.addEventListener("input", (e) => debouncedFilter(e.target.value));
clearBtn.addEventListener("click", () => {
  searchBox.value = "";
  searchBox.focus();
  displayRobots(robots);
});

// Initial render (also support ?q= in URL if بغيت)
const paramsQ = new URLSearchParams(location.search).get("q") || "";
searchBox.value = paramsQ;
runFilter(paramsQ);
