Feature: Form

Background: The page is loaded
  Given I open the app
  When The app page loads

  Scenario: Form is focused
    Then The Form is focused

  Scenario: Form input resets after submit
    Given I type 'Hello World' into the form
    When I submit the form
    Then The form input is blank
