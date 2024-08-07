import React, { useState, useEffect } from 'react';
import './App.css';
import Quote from './quotecard';

interface QuoteData {
  quote: string;
  author: string;
}
/*
import React, { useState, useEffect } from 'react';: Imports necessary functions and hooks from React, including useState and useEffect.
import './App.css';: Imports a CSS file for styling the component.
import Quote from './quotecard';: Imports a custom component named Quote from './quotecard'.
interface QuoteData { ... }: Defines an interface QuoteData with quote and author properties, both of type string.

*/
const App: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<QuoteData | null>(null);
  const [randomColor, setRandomColor] = useState("#000000");
  const transition = 'background-color 1s';

  /* Component Definition and State Initialization:
const App: React.FC = () => { ... }: Defines a functional component named App.
const [currentQuote, setCurrentQuote] = useState<QuoteData | null>(null);: Initializes state for currentQuote, which is of type QuoteData or null.
const [randomColor, setRandomColor] = useState("#000000");: Initializes state for randomColor with a default color of #000000 (black).
const transition = 'background-color 1s';: Defines a CSS transition effect for background color change with a duration of 1s.
*/

  useEffect(() => {
    fetchRandomQuote();
  }, []); 

  /*
  Effect Hook:
useEffect(() => { ... }, []);: Runs the effect once (on component mount) due to the empty dependency array ([]).
fetchRandomQuote();: Calls the fetchRandomQuote function when the component mounts to fetch a random quote.
  */
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

      /* Math.random(): Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

Math.floor(): Math.floor() rounds down the random number generated by Math.random() to the nearest integer. This ensures that the result is an integer.

Multiplication: The result of Math.random() is multiplied by 16777215. This number is 0xFFFFFF in hexadecimal, which represents the maximum value for RGB colors in hexadecimal format (FFFFFF).

toString(16): Converts the resulting integer into a hexadecimal string. The 16 argument specifies that the conversion should be in base-16 (hexadecimal).

#${...}: Prepends # to the hexadecimal string. In CSS, colors are represented in hexadecimal format prefixed with #.*/

    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  /*Fetch Function (fetchRandomQuote):
Defines an asynchronous function fetchRandomQuote to fetch a random quote from a provided URL.
const url = '...';: Specifies the URL from which to fetch quotes.
const response = await fetch(url);: Fetches data from the URL asynchronously.
const data = await response.json();: Parses the response data into JSON format.
const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];: Selects a random quote from the fetched data.
setCurrentQuote(randomQuote);: Updates the state currentQuote with the fetched random quote.
setRandomColor(...);: Sets a random background color using a hexadecimal color code.*/ 

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
        /*

Returns JSX to render the component.
<div className="App" style={{ backgroundColor: randomColor, transition }}>: Sets the background color dynamically based on randomColor state and applies a transition effect defined in the transition variable.
{currentQuote && (...)}: Conditionally renders the Quote component if currentQuote is truthy.
<Quote ... />: Passes props (quote, author, randomColor, transition, and fetchRandomQuote) to the Quote component.
Use of classNames for structral organization, styling and responsiveness, 
*/

        )}
      </div>
    </div>
  );
}

export default App;

