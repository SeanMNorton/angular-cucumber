Feature: Form

  Scenario: Seeing the Form
    Given I open the app
    When The app page loads
    Then Todo form is displayed
  
  Scenario: Form is focused
    Given I open the app
    When The app page loads
    Then The Form is focused

  