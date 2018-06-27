var quotes = [

    {
        quote: "Not everyone who works hard is rewarded. But! All those who succeed have worked hard!",
        source: 'Kamogawa Genji',
        citation: 'Hajime no Ippo: New Challenger',
        year: 2009
    },

    {

    quote: "I've loved, I've hated, I've cried, I've died inside. I've resurrected but don't neglect that I've been modified. I'm stronger, faster, better than ever before.",
    source: 'Logic',
    citation: 'Welcome to Forever album',
    year: 2013
    },

    {

    quote: "God tested me to find the best of me, and I know I'm going to make it even without a degree.",
    source: 'Logic',
    citation: 'Young Sinatra album',
    year: 2011
    },

    {

    quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
    source: 'Confucius'
    },

    {

    quote: "The hardest walk you can make is the walk you make alone. But that is the walk that makes you the strongest.",
    source: 'Unknown'
    }

];





var randomQuote = ' ';
var message;
var quotes;


function getRandomQuote() {

    var randomNumber = Math.floor(Math.random() * quotes.length );
    var randomQuote = quotes[randomNumber];
    return randomQuote;
}
console.log(getRandomQuote());

// call the getRandomQuote here and call the items in the array to put it in a message down below. .

function printQuote(conditonal) {
    var currentQuote = getRandomQuote();
    var message = "<p class='quote'>" + currentQuote.quote + "</p>";
    message += "<p class='quote'>" + currentQuote.source + "</p>" + "<p class='source'>" + '.';
    message += "<span class='citation'>" + currentQuote.citation + "</span>"
    message += "<span class='year'>" + currentQuote.year + "</span>"
    document.getElementById("quote-box").innerHTML = message;

    if (currentQuote.year !== undefined) {
        message += "<span class='year'>" + currentQuote.year + "</span>";
          } else {
              message.getElementById('year');
          }

}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
