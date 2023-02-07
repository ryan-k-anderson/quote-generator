let apiQuotes = []

// Get Quotes from API
async function getQuotes () {
    const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiURL);
        // await fetch allows the JS to wait to set the 'response' value while it fetches the data from the api set above
        apiQuotes = await response.jason();
        console.log(apiQuotes);
    } catch(error) {
        // Catch Error Here
    }
}

// On Load
getQuotes();