describe("Quote and Tweet app tests", () => {
  Cypress._.times(20, (k) => {
    it.only(`it shows loading element ${k} times`, () => {
      cy.intercept(
        "GET",
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
        (request) => {
          request.reply({
            fixture: "data.json",
          });
        }
      );

      cy.visit("http://localhost:4173");
      // loading spinner exists
      cy.get('[data-test="loading-spinner"]').should("exist");

      cy.get('[data-test="loading-spinner"]').should("not.exist");

      // get as
      cy.get('[data-test="quote-text"]').as("quoteText");
      cy.get('[data-test="author"]').as("author");
      cy.get('[data-test="new-quote"]').as("newQuoteButton");

      // the quote text
      cy.get("@quoteText").should("exist");
    });
  });
});
