// QuoteBox.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import QuoteBox from './quotecard';

// Mocking fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        quotes: [
          {
            text: 'Test Quote',
            author: 'Test Author'
          },
        ],
      }),
  })
);

test('renders quote and handles click events', async () => {
  // Render the component
  const { getByText, getByTestId } = render(<QuoteBox />);

  // Wait for initial quote fetch
  await waitFor(() => expect(getByText('Test Quote')).toBeInTheDocument());

  // Simulate clicking the 'Change Quote' button
  fireEvent.click(getByTestId('new-quote'));

  // Assert that a new quote is fetched
  await waitFor(() => expect(getByText('Test Quote')).toBeInTheDocument());

  // Simulate clicking the 'Tweet Now' button
  fireEvent.click(getByTestId('tweet-button'));

  // Assert that the correct Twitter intent URL is generated
  expect(window.open).toHaveBeenCalledWith(
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=Test%20Quote',
    '_blank'
  );
});

