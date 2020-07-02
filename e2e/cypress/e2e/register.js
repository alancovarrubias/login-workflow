import { buildUser } from "../support/generate";

describe("registration", () => {
  it("should register a new user", () => {
    const user = buildUser();
    cy.visit("/register");
    cy.findByLabelText(/username/i).type(user.username);
    cy.findByLabelText(/password/i).type(user.password);
    cy.findByText(/submit/i)
      .click()
      .url()
      .should("eq", `${Cypress.config().baseUrl}/home`)
      .window()
      .its("localStorage.user")
      .should("be.a", "string");
  });
});
