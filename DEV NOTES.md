## About

- this project revisits an old project I created when I was starting to learn React
- the purpose of revisiting it is to use TypeScript in a simple app

## The Old App

- QuoteBox wraps everything inside App
  - this seems pointless as it just renders props.children
  - the styles could be moved to the appropriate components
- the app appears to be fetching new quotes twice when the user clicks 'get quote'
- managed to fix the double fetch
  - updated my useFetchQuote custom hook
    - I actually understand custom fetch hooks which, I guess, is progress
  - further updated it with AbortController and it's working really well

## New App

- we have some text
- we have an author for the text
- we have a button that allows the user to post the quote to X with the author
- we have a button to fetch a new quote from the API

## Issues

### StrictMode AbortController and cy.intercept

- we have a request that fires in a useEffect on first render only
- with React.StrictMode this gets fired twice and the first request gets aborted since we immediately make a second request
- the issue here is our test is flaky
- by adding a delay of 1000ms to our cy.intercept reply, the test mostly passes but often fails to find the loading spinner
- if we disable StrictMode the test seems to always pass
- can't seem to find best practice here
- possible solution: https://blog.dai.codes/cypress-loading-state-tests/#:~:text=The%20problem%20here%20is%20that,and%20the%20test%20will%20fail.
