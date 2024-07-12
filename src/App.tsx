import React, { useState, useEffect } from 'react';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; 
import './App.css';

interface Quote {
  quote: string;
  author: string;
}

function App() {
  const [quote, setQuote] = useState<Quote | null>(null);

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
      setQuote(randomQuote);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  return  (
    <div> 
      <div className="App">
        {quote && (
          <>
          <FaQuoteLeft size ="30" style={{ marginRight : "10 px"}} />
            <h2 id="text">{quote.quote}</h2>
            <FaQuoteRight size ="30" style={{ marginLeft : "10 px"}} />
            <h4 id="author"> {quote.author}</h4>
          </>
        )}
      </div>
    </div>
  );
  
  
}

export default App;
