Feature: Shipper Experience - register page
# Page load
Background: Load register page
  Given Shipper is at register page

@register
Scenario: As a Shipper I want to register personal account
  When Shipper choose register personal account
    And Shipper click next
  Then Shipper is on fillinfo personal page
@register
Scenario: As a Shipper I want to register company account
  When Shipper choose register company account
    And Shipper click next
  Then Shipper is on fillinfo company page

# Scenario: As a Shipper I want to be able to go to daftar page
#   When Shipper click Daftar button
#   Then Shipper is on daftar page
  