Feature: Shipper Experience - fill info page
Background: Load fill info page
  Given Shipper is at fill info page

# Scenario: As a Shipper, I want to be notified when I use number that already registered
#   When Shipper fill name field with "kargo"
#     And Shipper fill email field with "axis@kargo.tech"
#     And Shipper fill phone field info with "83878766958"
#     And Shipper fill password field info with "Kargo123"
#     And Shipper click create account button
#   Then Shipper is on OTP page

Scenario: As a Shipper (personal), I want to enter my additional Shipper information
  When Shipper fill name field with "kargo"
    And Shipper fill email field with "axis@kargo.tech"
    And Shipper fill phone field info with "83878766958"
    And Shipper fill password field info with "Kargo123"
    And Shipper click create account button
  Then Shipper is on OTP page

Scenario: As a Shipper (company), I want to enter my additional Shipper information
  When Shipper fill name field with "kargo"
    And Shipper fill email field with "axis@kargo.tech"
    And Shipper fill phone field info with "83878766958"
    And Shipper fill password field info with "Kargo123"
    And Shipper click create account button
  Then Shipper is on OTP page

  # BLOCKER : SIGNUP AND OTP TESTING WAITING FOR STABLE OTP PROVIDER
  # API for deleting newly created user

# Scenario: As a Shipper I want to be able to go to Sign Up page
#   When Shipper click Sign Up button
#   Then Shipper is on Sign Up page
  
