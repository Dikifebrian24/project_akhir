Feature: Forgot Password in OrangeHRM

  Scenario: User resets password with valid username
    Given User is on the OrangeHRM login page
    When User clicks on Forgot your password link
    And User enters valid username "Admin"
    And User clicks on Reset Password button
    Then System should display Reset Password confirmation
