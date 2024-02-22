describe("Quote and Tweet app tests", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
      (request) => {
        request.reply({
          fixture: "data.json",
          delayMs: 50,
        });
      }
    );
    cy.visit("http://localhost:5173");
  });
  it("displays all elements, the user can fetch another quote and post quotes to X", () => {
    // loading spinner exists
    cy.get('[data-test="loading-spinner"]').should("not.exist");
    cy.get('[data-test="loading-spinner"]').should("exist");

    cy.get('[data-test="loading-spinner"]').should("not.exist");

    // get as
    cy.get('[data-test="quote-text"]').as("quoteText");
    cy.get('[data-test="author"]').as("author");
    cy.get('[data-test="new-quote"]').as("newQuoteButton");
    cy.get('[data-test="x-icon"]').as("xTwitterIcon");

    // the quote text
    cy.get("@quoteText").should("exist");
    // the author exists
    cy.get("@author").should("exist");
    // the button exists
    cy.get("@newQuoteButton").should("exist");
    // the X/Twitter icon exists
    cy.get("@xTwitterIcon").should("exist");

    // getting a new quote with the button
    cy.get("@newQuoteButton").click();
    cy.get('[data-test="loading-spinner"]').should("exist");
    cy.get('[data-test="loading-spinner"]').should("not.exist");
    cy.get("@quoteText").should("exist");
    cy.get("@author").should("exist");

    // Check the href on the X (Twitter) icon is correct
    cy.get("@quoteText").then(($el) => {
      const textOfQuote = $el.text();

      cy.get("@author").then(($auth) => {
        const author = $auth.text();
        cy.get("@xTwitterIcon")
          .parent()
          .should("have.attr", "href")
          .and(
            "equals",
            `https://twitter.com/intent/tweet?text=${textOfQuote} ${author}`
          );
      });
    });
  });
});
