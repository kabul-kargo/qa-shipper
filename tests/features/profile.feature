Feature: Shipper Experience - profile page
# Page load
Background: Load profile page
  Given Shipper is at profile page

@profile
# Scenario: As a Shipper I want to confirm my profile info
#   When Shipper is at profile page
#   Then Shipper is shown the correct credential
## TODO unique ID in name & account type

@profile
Scenario: As a Shipper I want to be able to change my password
  When Shipper choose register company account
    And Shipper click next
  Then Shipper is on fillinfo company page

@profile
Scenario: As a Shipper I want to be able to change my profile picture
  When Shipper change their profile picture
  Then Shipper profile picture is changed

@profile
Scenario: As a Shipper I want to be able to change my password
  When Shipper click "profilePage.elements.changePassword"
  Then Shipper is redirected to "profilePage.elements.changePasswordPage"

@profile
Scenario: As a Shipper I want to be able to change my language
  When Shipper click "profilePage.elements.changeLanguage"
   Then Shipper is redirected to "profilePage.elements.changeLanguagePage"

@profile
Scenario: As a Shipper I want to be able to see terms and conditions
  When Shipper click "profilePage.elements.termsAndCondition"
  Then Shipper is redirected to "profilePage.elements.termsAndConditionPage"
@profile
Scenario: As a Shipper I want to be able to log out
  When Shipper click "profilePage.elements.logOut"
  Then Shipper is logged out

# Scenario: As a Shipper I want to be able to go to daftar page
#   When Shipper click Daftar button
#   Then Shipper is on daftar page
  