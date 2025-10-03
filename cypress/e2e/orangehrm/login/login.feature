Feature: Login OrangeHRM - Positive Case

  Scenario: Login with valid username and password
    When User logs in with username "Admin" and password "admin123"
    Then User should be redirected to Dashboard
