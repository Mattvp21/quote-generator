const quoteContainer = document.getElementById("quote-container")
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteButton = document.getElementById("new-quote");
const loader = document.getElementById("loader")
let apiQuotes = [];

function loading() {
  quoteContainer.hidden = true;
  loader.hidden = false;
}

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}


async function getQuotes() {
  loading();
  let apiUrl = "https://type.fit/api/quotes";
  try {
   const response = await fetch(apiUrl);
   apiQuotes = await response.json();
   newQuotes();
  } catch (error) {
    
  }
}




function newQuotes() {
  loading();
  const randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   quote.textContent = randomQuote.text;
   !randomQuote.author ? author.textContent = "Unkown"
   : author.textContent = randomQuote.author;

   if(randomQuote.text.length > 50) {
     quote.classList.add("long-quote");
   } else {
     quote.classList.remove("long-quote");
   }
   complete();
}

quoteButton.addEventListener('click', () => {getQuotes();})