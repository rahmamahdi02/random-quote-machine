import React from 'react';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface QuoteProps {
  quote: string;
  author: string;
  randomColor: string;
  transition: string;
  fetchRandomQuote: () => void;
}

/* Interface Declaration (interface QuoteProps { ... }):

An interface in TypeScript defines the shape of an object, specifying what properties and methods it should have.
Properties Defined in QuoteProps:

quote: Represents a quote string that will be displayed in the component.
Type: string - Indicates that the quote property should hold a string value.
author: Represents the author of the quote.
Type: string - Specifies that the author property should be a string.
randomColor: Represents the color value used for styling elements dynamically.
Type: string - Indicates that randomColor should be a string containing a color value (typically in hexadecimal format).
transition: Represents the CSS transition effect to be applied.
Type: string - Specifies that transition should be a string containing CSS transition properties.
fetchRandomQuote: Represents a function that fetches a new random quote.
Type: () => void - Indicates that fetchRandomQuote should be a function that takes no arguments (()) and returns void (no return value) // a It performs some action (like fetching a random quote but does not produce a result that needs to be used or accessed by the caller.


Usage in Component:
The QuoteProps interface is used to type-check the props passed into the Quote component. This ensures that:
The component receives the expected properties (quote, author, randomColor, transition, fetchRandomQuote).
Each property has the correct data type (string for quote, author, randomColor, and transition, and () => void for fetchRandomQuote).
Helps in maintaining type safety and preventing potential errors related to prop types during development. */

const Quote: React.FC<QuoteProps> = ({ quote, author, randomColor, transition, fetchRandomQuote }) => {

    /* <div id="quote-box">: Wraps the entire content of the quote box.
<h1>: Displays a header with text "Generate Your Next Tweet" centered, styled with white color and bottom margin.
<div className="quote-content">: Contains the quote text (quote) and author (author) wrapped with quote icons (FaQuoteLeft and FaQuoteRight).
Tweet Button (<a> element):

<a>: Represents a link styled as a button (id="tweet-quote").
href: Generates a URL for tweeting the current quote using Twitter's intent API. It includes hashtags, related accounts, and the encoded quote text.
style: Applies the randomColor to the background with a transition effect (transition).*/
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
        <span style={{ marginRight: '5px' }}>Tweet Now</span> 
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
