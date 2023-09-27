Feature: nicolas-amabile.dev
  @smoke
  Scenario: visiting the homepage
    When I visit nicolas-amabile.dev
    Then I should see the navigation bar with all items

  Scenario: visiting the homepage again (not in smoke tests)
    When I visit nicolas-amabile.dev
    Then I should see the navigation bar with all items