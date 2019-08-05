Feature: Shipper Experience - fill info page
Background: Load fill info page
  Given user is at fill info page

Scenario: As a Shipper, I want to enter my additional Shipper information
  When user fill name field with "kargo"
    And user fill email field with "axis@kargo.tech"
    And user fill phone field info with "83878766958"
    And user fill password field info with "Kargo123"
    And user click create account button
  Then user is on OTP page

  # BLOCKER : SIGNUP AND OTP TESTING WAITING FOR STABLE OTP PROVIDER

# Scenario: As a User I want to be able to go to Sign Up page
#   When user click Sign Up button
#   Then user is on Sign Up page
  
