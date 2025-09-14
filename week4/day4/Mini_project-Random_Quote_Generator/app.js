// Initial quotes
let quotes = [
  {
    id: 0,
    author: "Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    likes: 0,
  },
  {
    id: 1,
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
    likes: 0,
  },
  {
    id: 2,
    author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
    likes: 0,
  },
  {
    id: 3,
    author: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
    likes: 0,
  },
];

let lastIndex = -1;
let currentQuote = null;
let filteredQuotes = [];
let filteredIndex = 0;

// DOM elements
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteLikes = document.getElementById("quote-likes");

// Display function
function displayQuote(quote) {
  quoteText.textContent = `"${quote.quote}"`;
  quoteAuthor.textContent = `- ${quote.author}`;
  quoteLikes.textContent = `❤️ Likes: ${quote.likes}`;
  currentQuote = quote;
}

// Generate random quote (not same as last)
document.getElementById("generate-btn").addEventListener("click", () => {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex);
  lastIndex = index;
  displayQuote(quotes[index]);
});

// Add new quote
document.getElementById("add-quote-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const newQuote = document.getElementById("new-quote").value;
  const newAuthor = document.getElementById("new-author").value;

  quotes.push({
    id: quotes.length,
    author: newAuthor,
    quote: newQuote,
    likes: 0,
  });

  alert("Quote added successfully!");
  e.target.reset();
});

// Count characters (with spaces)
document.getElementById("char-btn").addEventListener("click", () => {
  if (currentQuote)
    alert(`Characters (with spaces): ${currentQuote.quote.length}`);
});

// Count characters (no spaces)
document.getElementById("char-nospace-btn").addEventListener("click", () => {
  if (currentQuote)
    alert(
      `Characters (no spaces): ${currentQuote.quote.replace(/\s+/g, "").length}`
    );
});

// Count words
document.getElementById("word-btn").addEventListener("click", () => {
  if (currentQuote) alert(`Words: ${currentQuote.quote.split(/\s+/).length}`);
});

// Like button
document.getElementById("like-btn").addEventListener("click", () => {
  if (currentQuote) {
    currentQuote.likes++;
    displayQuote(currentQuote);
  }
});

// Filter by author
document.getElementById("filter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const author = document
    .getElementById("filter-author")
    .value.trim()
    .toLowerCase();
  filteredQuotes = quotes.filter((q) => q.author.toLowerCase() === author);
  filteredIndex = 0;
  if (filteredQuotes.length > 0) {
    displayQuote(filteredQuotes[filteredIndex]);
  } else {
    alert("No quotes found for this author.");
  }
});

// Previous & Next buttons
document.getElementById("prev-btn").addEventListener("click", () => {
  if (filteredQuotes.length > 0) {
    filteredIndex =
      (filteredIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
    displayQuote(filteredQuotes[filteredIndex]);
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (filteredQuotes.length > 0) {
    filteredIndex = (filteredIndex + 1) % filteredQuotes.length;
    displayQuote(filteredQuotes[filteredIndex]);
  }
});
