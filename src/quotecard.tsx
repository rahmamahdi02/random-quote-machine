import React from 'react';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface QuoteProps {
  quote: string;
  author: string;
  randomColor: string;
  transition: string;
  fetchRandomQuote: () => void;
}

const Quote: React.FC<QuoteProps> = ({ quote, author, randomColor, transition, fetchRandomQuote }) => {
  return (
    <div id="quote-box">
      <h1 style={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>Generate Your Next Tweet</h1>
      <div className="quote-content">
        <FaQuoteLeft size="20" style={{ marginRight: "10px" }} />
        <h2 id="text">{quote}</h2>
        <FaQuoteRight size="20" style={{ marginLeft: "10px" }} />
        <h4 id="author">- {author}</h4>
      </div>
      <div className="buttons">
        <a
          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(quote)}`}
          id="tweet-quote"
          style={{
            backgroundColor: randomColor,
            marginRight: "10px",
            transition,
          }}
        >
        <span style={{ marginRight: '5px' }}>Tweet Now</span> {/* Adjust margin as needed */}
          <FaTwitter color="white" />
        </a>
        <button
          id="new-quote"
          onClick={fetchRandomQuote}
          style={{ backgroundColor: randomColor, color: 'black', transition: 'background-color 1s' }}
        >
          Change Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
