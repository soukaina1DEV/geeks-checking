//  Exercise 1 : Giphy API

const giphy = async () => {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data from Giphy API:", error);
  }
};
giphy();

//  Exercise 2 : Giphy API
const giphy2 = async () => {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data from Giphy API:", error);
  }
};
giphy2();

// Exercise 3 : Async function
const fetchfunc = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data from SWAPI:", error);
  }
};
fetchfunc();

// Exercise 4 : Analyze
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
// The output will be:
// calling (waits 2 seconds)  resolved
