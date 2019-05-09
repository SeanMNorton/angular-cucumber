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
  
  # Scenario: New todo is displayed
  #   Given I type 'Hello World' into the form
  #   When I submit the form
  #   Then 'Hello World' is displayed

  Scenario Outline: Inputing a Todo
    Given I type '<input>' into the form
    When I submit the form
    Then '<output>' is displayed

    Examples:
    | input        | output       |
    | hello world  | hello world  |
    | as;djqwer42  | as;djqwer42  |
  @dev
  Scenario: Remove button is clicked
    Given I type 'Hello World' into the form
    When I submit the form
    Then "Hello World" is displayed
    When Remove button is clicked
    Then The label is not displayed
