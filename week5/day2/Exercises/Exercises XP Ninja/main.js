// Exercise 1 : Giphy API #3

const form = document.getElementById("gifForm");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteBtn = document.getElementById("deleteBtn");

// API key
const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Handle form submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = searchInput.value.trim();
  if (!query) return;

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&rating=g&api_key=${API_KEY}&limit=25`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Add gifs to page
    data.data.forEach((gif) => {
      const img = document.createElement("img");
      img.src = gif.images.original.url;
      img.alt = gif.title;
      gifContainer.appendChild(img);
    });
  } catch (err) {
    console.error("Error fetching GIFs:", err);
  }
});

// Handle delete button
deleteBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});





// Exercise 2 : Analyze #4

// Analyze the code provided below - what will be the outcome?

let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

//The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

let concurrentPromise = function () {
    console.log('==CONCURRENT START with Promise.all==');
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
        console.log(messages[0]);
        console.log(messages[1]);
    });
}

setTimeout(concurrentPromise, 1000)


// OUTPUT:    ==CONCURRENT START with Promise.all==
//            starting slow promise
//            starting fast promise
//            fast promise is done
//            slow promise is done
//            slow
//            fast




// Exercise 3 : Analyze #5

// Analyze the code provided below - what will be the outcome?

let resolveAfter2Seconds2 = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second2 = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==');
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds2()))(),
        (async () => console.log(await resolveAfter1Second2()))()
    ]);
}

setTimeout(parallel, 5000)


// OUTPUT:   ==PARALLEL with await Promise.all==
//           starting slow promise
//           starting fast promise
//           fast promise is done
//           fast
//           slow promise is done
//           slow



// Exercise 4 : Analyze #6

// Analyze the code provided below - what will be the outcome?

let resolveAfter2Seconds3 = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second3 = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds3().then((message) => console.log(message));
    resolveAfter1Second3().then((message) => console.log(message));
}

setTimeout(parallelPromise, 13000)



// OUTPUT:  ==PARALLEL with Promise.then==
//          starting slow promise
//          starting fast promise
//          fast promise is done
//          fast
//          slow promise is done
//          slow
