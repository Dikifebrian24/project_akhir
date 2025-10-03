// cypress/fixtures/page_objects/orangehrm/DashboardPage.js
class DashboardPage {
  verifyOnDashboard() {
    cy.url().should("include", "/dashboard");
    // Pastikan elemen judul Dashboard muncul (sesuaikan selector jika beda)
    cy.get("h6").should("contain.text", "Dashboard");
  }

  goToDirectory() {
    // Klik menu Directory di sidebar — sesuaikan if selector berbeda
    cy.get("aside").within(() => {
      cy.contains("a", "Directory").click();
    });
    cy.url().should("include", "/directory");
    // cek header halaman directory
    cy.contains(/Directory/i).should("exist");
  }
}

module.exports = new DashboardPage();
