import React, { useState, useEffect } from 'react';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; 
import './App.css';

interface Quote {
  quote: string;
  author: string;
}

function App({ randomColor, changeQuote, transition }) {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  useEffect(() => {
    fetchRandomQuote();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const fetchRandomQuote = async () => {
    const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
      setCurrentQuote(randomQuote);
      setRandomColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  return  (
    <div className="App">
      <div className="container">
      
        {currentQuote && (
          <div id="quote-box">
            <h1 style={{ color: 'white', marginBottom: '20px', textAlign: 'center'}}>Generate Your Next Tweet </h1>
            <div className="quote-content"> 
              <FaQuoteLeft size="20" style={{ marginRight: "10px" }} />
              <h2 id="text">{currentQuote.quote}</h2>
              <FaQuoteRight size="20" style={{ marginLeft: "10px" }} />
              <h4 id="author">{currentQuote.author}</h4>
            </div>
            <div className="buttons">
              <a
                href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(currentQuote.quote)}`}
                id="tweet-quote"
                style={{
                  backgroundColor: randomColor,
                  marginRight: "10px",
                  transition,
                }}
              >
                <FaTwitter color="white" />
              </a>

               <button
                id="new-quote"
                onClick={fetchRandomQuote}
                style={{ backgroundColor: randomColor, transition: 'background-color 1s' }}
              >
                Change Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
