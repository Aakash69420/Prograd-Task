const endpoint = 'https://type.fit/api/quotes';
const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

async function getQuote() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    const index = Math.floor(Math.random() * data.length);
    const quote = data[index].text;
    const author = data[index].author || 'Unknown';
    quoteElement.innerHTML = `${quote} - ${author}`;
  } catch (error) {
    console.error(error);
  }
}

getQuote();

newQuoteButton.addEventListener('click', getQuote);
