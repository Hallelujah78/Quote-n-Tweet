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
