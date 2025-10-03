// cypress/support/step_definitions/orangehrm/forgot-password/forgot-password.js
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const ForgotPasswordPage = require("../../../../fixtures/page_objects/orangehrm/forgotPassword.page");

When("User clicks on Forgot your password link", () => {
  ForgotPasswordPage.clickForgotLink();
});

When("User enters valid username {string}", (username) => {
  ForgotPasswordPage.fillUsername(username);
});

When("User clicks on Reset Password button", () => {
  ForgotPasswordPage.clickResetButton();
});

Then("System should display Reset Password confirmation", () => {
  ForgotPasswordPage.getSuccessMessage().should(
    "contain.text",
    "Reset Password link sent successfully"
  );
});
