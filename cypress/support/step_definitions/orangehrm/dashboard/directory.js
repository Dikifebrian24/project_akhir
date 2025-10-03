// cypress/support/step_definitions/orangehrm/dashboard/directory.js
const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../../../../fixtures/page_objects/orangehrm/LoginPage");
const DashboardPage = require("../../../../fixtures/page_objects/orangehrm/DashboardPage");
const DirectoryPage = require("../../../../fixtures/page_objects/orangehrm/DirectoryPage");

// Jika feature memanggil: Given I am logged in with username "Admin" and password "admin123"
Given(
  "I am logged in with username {string} and password {string}",
  (username, password) => {
    LoginPage.visit();
    LoginPage.login(username, password);
    DashboardPage.verifyOnDashboard();
  }
);

Given("I navigate to the Directory page", () => {
  DashboardPage.goToDirectory();
});

When("I search user by name {string}", (name) => {
  DirectoryPage.searchByName(name);
});

When("I search user by job title {string}", (jobTitle) => {
  DirectoryPage.searchByJobTitle(jobTitle);
});

When("I search user by location {string}", (location) => {
  DirectoryPage.searchByLocation(location);
});

When(
  "I search user by name {string} with job title {string} and location {string}",
  (name, jobTitle, location) => {
    DirectoryPage.searchByAll(name, jobTitle, location);
  }
);

Then("I should see the search result contains {string}", (expectedName) => {
  cy.contains(expectedName, { timeout: 10000 }).should("exist");
});
