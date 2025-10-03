// cypress/fixtures/page_objects/orangehrm/forgotPassword.page.js
class ForgotPasswordPage {
  clickForgotLink() {
    cy.get("p.orangehrm-login-forgot-header").click();
  }

  fillUsername(username) {
    // support placeholder atau name
    cy.get("input[placeholder='Username'], input[name='username']")
      .clear()
      .type(username);
  }

  clickResetButton() {
    cy.get("button[type='submit']").click();
  }

  getSuccessMessage() {
    // selector untuk pesan sukses (sesuaikan jika perlu)
    return cy.get(
      ".oxd-text.oxd-text--h6.orangehrm-forgot-password-title, .oxd-text--h6"
    );
  }
}

module.exports = new ForgotPasswordPage();
