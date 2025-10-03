// cypress/fixtures/page_objects/orangehrm/DirectoryPage.js
class DirectoryPage {
  searchByName(name) {
    cy.get("input[placeholder='Type for hints...']").clear().type(name);
    cy.get("button[type='submit']").click();
  }

  searchByJobTitle(jobTitle) {
    cy.get(".oxd-select-text").eq(0).click();
    cy.contains(".oxd-select-option", jobTitle).click();
    cy.get("button[type='submit']").click();
  }

  searchByLocation(location) {
    cy.get(".oxd-select-text").eq(1).click();
    cy.contains(".oxd-select-option", location).click();
    cy.get("button[type='submit']").click();
  }

  searchByAll(name, jobTitle, location) {
    cy.get("input[placeholder='Type for hints...']").clear().type(name);
    cy.get(".oxd-select-text").eq(0).click();
    cy.contains(".oxd-select-option", jobTitle).click();
    cy.get(".oxd-select-text").eq(1).click();
    cy.contains(".oxd-select-option", location).click();
    cy.get("button[type='submit']").click();
  }
}

module.exports = new DirectoryPage();
