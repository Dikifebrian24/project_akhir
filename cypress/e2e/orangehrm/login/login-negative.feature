Feature: Login OrangeHRM - Negative Cases

  Scenario: Login with only username
    When User logs in with username "Admin" and password ""
    Then User should see error message "Required"

  Scenario: Login with only password
    When User logs in with username "" and password "admin123"
    Then User should see error message "Required"

  Scenario: Login with invalid username and password
    When User logs in with username "wrongUser" and password "wrongPass"
    Then User should see error message "Invalid credentials"

  Scenario: Login with empty username and password
    When User logs in with username "" and password ""
    Then User should see error message "Required"
