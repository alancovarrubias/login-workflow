import { buildUser } from "../support/generate";

describe("logging out", () => {
  it("should logout a logged in user", () => {
    const user = buildUser();
    cy.request({
      url: `http://localhost:3000/users`,
      method: "POST",
      body: { user },
    });
    cy.visit("/");
    cy.findByLabelText(/username/i).type(user.username);
    cy.findByLabelText(/password/i).type(user.password);
    cy.findByText(/submit/i).click();
    cy.findByText(/logout/i)
      .click()
      .url()
      .should("eq", `${Cypress.config().baseUrl}/login`)
      .window()
      .its("localStorage.user")
      .should("be.undefined");
  });
});
