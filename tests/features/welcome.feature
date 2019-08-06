Feature: Shipper Experience - welcome page
Background: Load welcome page
  Given Shipper is at welcome page

Scenario: As a Shipper I want to be able to go to Sign In in page
  When Shipper click Sign In button
  Then Shipper is on Sign In page

# Subject to A/B testing
Scenario: As a Shipper I want to be able to go to Sign Up page
  When Shipper click Sign Up button
  Then Shipper is on Sign Up page
  # Then Shipper is redirected to "[href='/home']"
