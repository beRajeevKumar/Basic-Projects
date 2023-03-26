"use strict";
// API URL
const apiUrl = "https://api.quotable.io/random";
// Selectors
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newBtn = document.querySelector(".new-quote");
const tweetBtn = document.querySelector(".tweet-quote");

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  quote.textContent = data.content;
  author.innerHTML = `&mdash; ${data.author}`;
}
getQuote(apiUrl);

newBtn.addEventListener("click", () => {
  getQuote(apiUrl);
});
tweetBtn.addEventListener("click", () => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quote.textContent}  ${author.textContent}`;
  window.open(tweetUrl, "_blank");
});
