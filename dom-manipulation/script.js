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

    localStorage.setItem('quotesArray', JSON.stringify(quotes));


    const li = document.createElement("li");
    li.textContent = createAddQuoteForm;

    document.getElementById("u-list").appendChild(li);

    document.getElementById('newQuoteText').value = "";
    document.getElementById('newQuoteCategory').value = "";

    // console.log(quotes)


}

function importFromJsonFile(event) {
   const fileReader = new FileReader();
   fileReader.onload = function(event) {
     const importedQuotes = JSON.parse(event.target.result);
     quotes.push(...importedQuotes);
     saveQuotes();
     alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
}

newQuote.addEventListener ('click', showRandomQuote);