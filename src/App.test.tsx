// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import App from './App';

// // Mock fetch function
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     ok: true,
//     json: () =>
//       Promise.resolve({
//         quotes: [
//           {
//             quote: 'Test Quote',
//           },
//         ],
//       }),
//   })
// );

// test('clicking tweet button opens correct Twitter intent URL', async () => {
//   // Render the component
//   const { getByTestId } = render(<App />);

//   // Wait for the component to render with fetched data
//   await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust timeout as needed

//   // Spy on window.open method
//   const openMock = jest.spyOn(window, 'open').mockImplementation(() => {});

//   // Simulate clicking the tweet button
//   fireEvent.click(getByTestId('tweet-button'));

//   // Log openMock calls to see what was passed
//   console.log('Calls to window.open:', openMock.mock.calls);

//   // Assert that window.open is called with the correct Twitter URL
//   expect(openMock).toHaveBeenCalledWith(
//     'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=Test%20Quote',
//     '_blank'
//   );

//   // Restore original method after test
//   openMock.mockRestore();
// });
