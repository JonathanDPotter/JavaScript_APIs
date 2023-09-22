const API_KEY = "QngqxMH9kx6gbyq8eXZrLjJy7BHBT4OM";

console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchButton = document.getElementById("submitSearch");
const input = document.getElementById("searchWord");
const imageElement = document.getElementsByTagName("img")[0];
const feedback = document.getElementById("feedback");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let result;

searchButton.addEventListener("click", handleFetch);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function handleFetch() {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?apiKey=${API_KEY}&s=${input.value}`
  )
    .then((response) => response.json())
    .then((data) => (imageElement.src = data.data.images.original.url))
    .catch((error) => (feedback.textContent = error.message));
}
