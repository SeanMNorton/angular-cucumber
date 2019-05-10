Feature: Clicking Nav Links

   Scenario: Clicking the Info link
      Given I open the app
      When The app page loads
      When I click the Info link
      Then I am on the Info page
      
   Scenario: Clicking the Home link
      Given I open the app on not the home page
      And The app page loads
      When I click the Home link
      Then I am on the Home page
         