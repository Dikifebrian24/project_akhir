describe("OrangeHRM - Negative Login UI", () => {
  beforeEach(() => {
    cy.visit("/web/index.php/auth/login");
  });

  it("should show error with invalid password", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("wrongpass");
    cy.get('button[type="submit"]').click();

    cy.get(".oxd-alert-content-text")
      .should("be.visible")
      .and("contain", "Invalid credentials");
  });

  it("should show error with invalid username", () => {
    cy.get('input[name="username"]').type("wrongUser");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    cy.get(".oxd-alert-content-text")
      .should("be.visible")
      .and("contain", "Invalid credentials");
  });
});
