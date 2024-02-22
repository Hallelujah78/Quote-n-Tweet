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

\*\*\*THIS IS FIXED

- we have a request that fires in a useEffect on first render only
- with React.StrictMode this gets fired twice and the first request gets aborted since we immediately make a second request
- the issue here is our test is flaky
- by adding a delay of 1000ms to our cy.intercept reply, the test mostly passes but often fails to find the loading spinner
- if we disable StrictMode the test seems to always pass
- can't seem to find best practice here
- possible solution: https://blog.dai.codes/cypress-loading-state-tests/#:~:text=The%20problem%20here%20is%20that,and%20the%20test%20will%20fail.
- the above didn't fix
- https://www.cypress.io/blog/2021/01/26/when-can-the-test-blink

  - the suggested solution is adding `delayMs` but this has been tried

- Disabling StrictMode and run the test 20 times:

```js
 Cypress._.times(20, (k) => { it.only(...)})
```

- it passes every time
- enabling strict mode with AbortController and 40ms delay
  - passes 2 times and fails 20!
- commenenting out all AbortController related code in the app, our tests pass 20/20
- Updated App.tsx whereby if isLoading, isError and state.quotes.length >= 1 all turn out to be falsy
  **_SOlUTION_**
- the problem code:

```js
const getQuotes = useCallback(async () => {
    setIsLoading(true);
    ...
 try {
     ...
      }
     catch (error) {
      if (error instanceof Error) {
        if (error.name !== "AbortError") {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }
    setIsLoading(false);
  }, []);
```

- I set loading to true when I call my fetch (getQuotes)
- I set loading to false in the catch block if the error is NOT an AbortError
- I set loading to false at the end outside the try-catch
- the issue here is we are aborting the first request due to StrictMode
- if we add a console.log after the try-catch, we see it runs even where a request is aborted! - hence isLoading is being set to false even when the request is aborted
- the solution is to add `setIsLoading(false)` inside the try block after we update state and don't set the loading state after the try-catch at all
- production build also passing 20/20
