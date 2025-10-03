// cypress/support/step_definitions/orangehrm/login/login-negative.js
const { Then } = require("@badeball/cypress-cucumber-preprocessor");

Then("User should see error message {string}", (message) => {
  if (message === "Invalid credentials") {
    cy.get(".oxd-alert-content", { timeout: 10000 }).should(
      "contain.text",
      message
    );
  } else {
    cy.get(".oxd-input-field-error-message", { timeout: 10000 }).should(
      "contain.text",
      message
    );
  }
});
