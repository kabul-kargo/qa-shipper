Feature: Shipper Experience - welcome page
Background: Load welcome page
  Given user is at welcome page

Scenario: As a User I want to be able to go to Sign In in page
  When user click Sign In button
  Then user is on Sign In page

Scenario: As a User I want to be able to go to Sign Up page
  When user click Sign Up button
  Then user is on Sign Up page
  
