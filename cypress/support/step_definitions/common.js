import { Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../fixtures/page_objects/orangehrm/LoginPage";
import DashboardPage from "../../fixtures/page_objects/orangehrm/DashboardPage";

// Step: buka login page
Given("User is on the OrangeHRM login page", () => {
  LoginPage.visit();
});

// Step: login default dengan user Admin
Given("I am logged into OrangeHRM", () => {
  LoginPage.login("Admin", "admin123");
  DashboardPage.verifyOnDashboard();
});
