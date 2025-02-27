/// <reference types="cypress" />

describe("Action", () => {
  beforeEach(() => {
    cy.visit("https://g1-lrnr-chat-ai.vercel.app/");
  });
  it("should have a navigation bar", () => {
    cy.get("nav").should("exist");
  });

  it("should have a footer", () => {
    cy.get("footer").should("exist");
  });

  it("should have a button", () => {
    cy.get("button").should("exist");
  });
  it("should have a button", () => {
    cy.get("div").should("contain.text", "LRNR");
  });
});



