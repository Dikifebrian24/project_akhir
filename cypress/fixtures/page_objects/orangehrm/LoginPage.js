// cypress/fixtures/page_objects/orangehrm/LoginPage.js
class LoginPage {
  visit() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  login(username, password) {
    // Pastikan halaman sudah terbuka sebelum mengisi
    // (jika sudah memanggil visit() di step sebelum login, ini tetap aman)
    if (username) {
      cy.get("input[name='username']").clear().type(username, { log: false });
    }
    if (password) {
      cy.get("input[name='password']").clear().type(password, { log: false });
    }
    cy.get("button[type='submit']").click();
  }

  enterUsername(username) {
    cy.get("input[name='username']").clear().type(username);
  }

  enterPassword(password) {
    cy.get("input[name='password']").clear().type(password);
  }
}

module.exports = new LoginPage();
