describe("OrangeHRM API after login", () => {
  beforeEach(() => {
    cy.session("login", () => {
      cy.visit("/web/index.php/auth/login");
      cy.get('input[name="username"]').should("be.visible").type("Admin");
      cy.get('input[name="password"]').should("be.visible").type("admin123");
      cy.get('button[type="submit"]').click();
      cy.url().should("include", "/dashboard");
    });
  });

  it("should return time at work data", () => {
    cy.request(
      "/web/index.php/api/v2/dashboard/employees/time-at-work?timezoneOffset=7&currentDate=2025-10-03"
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
    });
  });

  it("should return buzz feed", () => {
    cy.request(
      "/web/index.php/api/v2/buzz/feed?limit=5&offset=0&sortOrder=DESC&sortField=share.createdAtUtc"
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
    });
  });
});
