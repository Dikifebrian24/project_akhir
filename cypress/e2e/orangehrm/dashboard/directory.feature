Feature: Directory Search

  Scenario: Search user by name
    Given I am logged in with username "Admin" and password "admin123"
    And I navigate to the Directory page
    When I search user by name "manda66 akhil Qwerty123"
    Then I should see the search result contains "manda66 akhil Qwerty123"

  Scenario: Search user by job title
    Given I am logged in with username "Admin" and password "admin123"
    And I navigate to the Directory page
    When I search user by job title "HR Manager"
    Then I should see the search result contains "HR Manager"

  Scenario: Search user by location
    Given I am logged in with username "Admin" and password "admin123"
    And I navigate to the Directory page
    When I search user by location "New York Sales Office"
    Then I should see the search result contains "New York Sales Office"

  Scenario: Search user by name, job title and location
    Given I am logged in with username "Admin" and password "admin123"
    And I navigate to the Directory page
    When I search user by name "manda66 akhil Qwerty123" with job title "HR Manager" and location "New York Sales Office"
    Then I should see the search result contains "manda66 akhil Qwerty123"
