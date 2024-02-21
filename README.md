# Quote n Tweet

## Usage

This project was bootstrapped with Vite and the react-ts template (React with TypeScript).

- `npm run dev` to start the dev server
- `npm run build && npm run preview` to view the build locally at `http://localhost:4173/`

## What Even Is This?

This is a frontend only that fetches quotes from a GitHub Gist provided by FreeCodeCamp. The Gist file is `quotes.json` and we use the URL for the raw content to retrieve it.

We then pick a random quote from the 100 or so quotes returned and display it to the user. The user can post the quote and author to X (Twitter).

This is an old project, one of the first I built when learning React, and I thought it would be an easy project to practice using TypeScript.

I added a loading spinner and a basic error component but these aren't really required (and are actually distracting/bad UX) unless you are on 3G with caching disabled. The data is cached by the browser anyway so the loading component is really not required except on first visit.

In addition, I added AbortController for the requests. Again, this only comes into play where the user loads the app and immediately closes the tab. The loading component prevents the user from mashing the `New Quote` button and caching means that it's quite hard/impossible to trigger `abort()` on the controller even if the loading component is disabled.
