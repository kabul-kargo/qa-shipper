Feature: Shipper Experience - profile page
# Page load
# Background: Load profile page
#   Given Shipper is at login page
#   When Shipper fill every form correctly
#       And Shipper click Masuk
#       And Shipper click Tab "[href='/profile']"

# @profile
# Scenario: As a Shipper I want to confirm my profile info
#   When Shipper is at profile page
#   Then Shipper is shown the correct credential
# # TODO unique ID in name & account type

# @profile
# Scenario: As a Shipper I want to be able to change my password
#   When Shipper choose register company account
#     And Shipper click next
#   Then Shipper is on fillinfo company page

# @profile
# Scenario: As a Shipper I want to be able to change my profile picture
#   When Shipper change their profile picture
#   Then Shipper profile picture is changed

@profile
Scenario: As a Shipper I want to be able to change my password
  Given Shipper is at login page
  When Shipper fill every form correctly
      And Shipper click Masuk
      And Shipper click Tab "[href='/profile']"
      And Shipper click "div>div:nth-child(3)>#profile_common_button"
  Then Shipper is redirected to "[name='newPassword']"

# @profile @quit
# Scenario: As a Shipper I want to be able to change my language
#   Given Shipper is at profile page
#   When Shipper click "div:nth-child(5)>div>div:nth-child(1)>#profile_common_button"
#   Then Shipper is redirected to "#language_selector-button"

# @profile @quit
# Scenario: As a Shipper I want to be able to see terms and conditions
#   Given Shipper is at profile page
#   When Shipper click "div:nth-child(5)>div>div:nth-child(2)>#profile_common_button"
#   Then Shipper is redirected to ".dropdown-menu"
  
# @profile
# Scenario: As a Shipper I want to be able to log out
#   When Shipper click "profilePage.elements.logOut"
#   Then Shipper is logged out

# Scenario: As a Shipper I want to be able to go to daftar page
#   When Shipper click Daftar button
#   Then Shipper is on daftar page
  