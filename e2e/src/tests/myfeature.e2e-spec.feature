Feature: App page

    Scenario: First scenario
        Given I open app page
        When app page loads
        Then header "Welcome to angular-cucumber!" is displayed