Feature: Shipper Experience - register page
# Page load
Background: Load register page
  Given user is at register page

@register
Scenario: As a User I want to register personal account
  When user choose register personal account
    And user click next
  Then user is on fillinfo personal page
@register
Scenario: As a User I want to register company account
  When user choose register company account
    And user click next
  Then user is on fillinfo company page

# Scenario: As a User I want to be able to go to daftar page
#   When user click Daftar button
#   Then user is on daftar page
  