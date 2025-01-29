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


console.log(quotes)


function showRandomQuote  () {

    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

    quoteDisplay.innerHTML = quotes[randomQuoteIndex].text;
}

function addQuote () {
    // console.log("new quote created")

    const createAddQuoteForm = document.getElementById('newQuoteText').value.trim();
    const newQuoteCategory = document.getElementById('newQuoteCategory').value.trim();

    let newObj = {
        "text" : createAddQuoteForm,
        "category" : newQuoteCategory
    }

    quotes.push(newObj)

    document.getElementById('createAddQuoteForm').value = "";
    document.getElementById('newQuoteCategory').value = "";

    console.log(quotes)

}

newQuote.addEventListener ('click', showRandomQuote);