import React, { useState, useEffect } from 'react';
import './App.css';
import Quote from './quotecard';

interface QuoteData {
  quote: string;
  author: string;
}

const App: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<QuoteData | null>(null);
  const [randomColor, setRandomColor] = useState("#000000");
  const transition = 'background-color 1s';

  useEffect(() => {
    fetchRandomQuote();
  }, []); 

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

  return (
    <div className="App" style={{ backgroundColor: randomColor, transition }}>
      <div className="container">
        
        {currentQuote && (
          <Quote
            quote={currentQuote.quote}
            author={currentQuote.author}
            randomColor={randomColor}
            transition={transition}
            fetchRandomQuote={fetchRandomQuote}
          />
        
        )}
      </div>
    </div>
  );
}

export default App;

