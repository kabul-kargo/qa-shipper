Feature: kargo - welcome page
# Page load
Background: Load welcome page
  Given user is at welcome page


Scenario: As a User I want to be able to go to login page
  When user click Masuk button
  Then user is on login page
  