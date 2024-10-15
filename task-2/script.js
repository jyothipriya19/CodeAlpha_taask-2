// Array of quotes
const quotes = [
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    }
  ];
  
  // Function to generate a new random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    // Display the new quote
    document.getElementById('quote').textContent = `"${randomQuote.quote}"`;
    document.getElementById('author').textContent = `- ${randomQuote.author}`;
  
    // Update the Twitter share link with the new quote
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${randomQuote.quote}" - ${randomQuote.author}`)}`;
    document.getElementById('share-quote').setAttribute('href', twitterUrl);
  }
  
  // Call the function once when the page loads to display a quote initially
  generateQuote();