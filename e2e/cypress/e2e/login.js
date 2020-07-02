import { buildUser } from "../support/generate";
describe("logging in", () => {
  it("logs in a registered user", () => {
    const user = buildUser();
    cy.request({
      url: `http://localhost:3000/users`,
      method: "POST",
      body: { user },
    });
    cy.visit("/");
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
  it("does not login unregistered user", () => {
    const user = buildUser();
    cy.visit("/");
    cy.findByLabelText(/username/i).type(user.username);
    cy.findByLabelText(/password/i).type(user.password);
    cy.findByText(/submit/i)
      .click()
      .url()
      .should("eq", `${Cypress.config().baseUrl}/error`)
      .window()
      .its("localStorage.user")
      .should("be.undefined");
  });
});
