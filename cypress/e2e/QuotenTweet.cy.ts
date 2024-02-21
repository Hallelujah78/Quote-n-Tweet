describe("Quote and Tweet app tests", () => {
  beforeEach(() => {
    cy.clock();
    cy.visit("http://localhost:5173");
  });
  it("The user visits the page", () => {
    cy.intercept(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
      (req) => {
        req.reply({
          statusCode: 200,
          fixture: "data.json",
          delay: 500,
          throttleKbps: 200,
        });
      }
    );

    // loading spinner exists
    cy.get('[data-test="loading-spinner"]').should("not.exist");
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
