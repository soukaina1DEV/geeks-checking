// 1st daily challenge
function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    if (arr.every((item) => typeof item === "string")) {
      resolve(arr.map((item) => item.toUpperCase()));
    } else {
      reject("Array contains non-string elements");
    }
  });
}
function sortWords(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length > 4) {
      resolve(arr.sort());
    } else {
      reject("Array must contain more than 4 elements");
    }
  });
}
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));

// 2nd daily challenge
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;
function toJs(morse) {
  return new Promise((resolve, reject) => {
    try {
      if (!morse) throw new Error("No Morse code provided");
      const json = JSON.parse(morse);
      resolve(json);
    } catch (error) {
      reject("Invalid Morse code");
    }
  });
}
function toMorse(morseObj) {
  return new Promise((resolve, reject) => {
    const str = prompt("Enter a string to convert to Morse code: ");
    if (!morseObj || Object.keys(morseObj).length === 0) {
      reject("Invalid Morse object");
      return;
    }
    if (!str || typeof str !== "string") {
      reject("Invalid input string");
      return;
    }
    if (str.split("").some((char) => !morseObj[char])) {
      reject("String contains unsupported characters");
      return;
    }
    const morseCode = str
      .split("")
      .map((char) => morseObj[char])
      .join(" ");
    resolve(morseCode);
  });
}
function joinWords(morseTranslation) {
  return new Promise((resolve, reject) => {
    if (!morseTranslation || typeof morseTranslation !== "string") {
      reject("Invalid Morse translation");
      return;
    }
    const words = morseTranslation
      .split(" ")
      .map((char) => morseObj[char])
      .join("\n");
    resolve(words);
  });
}
