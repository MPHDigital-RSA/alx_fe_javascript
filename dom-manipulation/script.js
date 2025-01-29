const quoteDisplay = document.getElementById('quoteDisplay');
const newQuote = document.getElementById('newQuote');

const quotes = [
    {
        "text": ' "Quote 1"  ',
        "category" : "science"
    },

    {
        "text": ' "Quote 2"  ',
        "category" : "soccer"
    },

    {
        "text": ' "Quote 3"  ',
        "category" : "science"
    },

    {
        "text": ' "Quote 4"  ',
        "category" : "tennis"
    },

    {
        "text": ' "Quote 5"  ',
        "category" : "soccer"
    },

    {
        "text": ' "Quote 6"  ',
        "category" : "tennis"
    }
];


// console.log(randomQuoteIndex)


function showRandomQuote  () {

    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

    quoteDisplay.innerHTML = quotes[randomQuoteIndex].text;
}

newQuote.addEventListener ('click', showRandomQuote);