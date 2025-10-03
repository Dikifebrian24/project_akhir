// cypress/support/step_definitions/orangehrm/login/login.js
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../../../../fixtures/page_objects/orangehrm/LoginPage");
const DashboardPage = require("../../../../fixtures/page_objects/orangehrm/DashboardPage");

// Step reuse untuk semua skenario login
When(
  "User logs in with username {string} and password {string}",
  (username, password) => {
    // pastikan menuju halaman login dulu
    LoginPage.visit();
    LoginPage.login(username, password);
  }
);

Then("User should be redirected to Dashboard", () => {
  DashboardPage.verifyOnDashboard();
});
