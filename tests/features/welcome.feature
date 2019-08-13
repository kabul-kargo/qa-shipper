Feature: Shipper Experience - welcome page
Background: Load welcome page
  Given Shipper is at welcome page

@welcome
Scenario: As a Shipper I want to be able to go to Sign In in page
  When Shipper click Sign In button
  Then Shipper is on Sign In page

# Subject to A/B testing
@welcome
Scenario: As a Shipper I want to be able to go to Sign Up page - A Flow
  When Shipper click Sign Up button
  Then Shipper is on Sign Up page
  # Shipper redirected to pick account type (Personal/Company)

# Subject to A/B testing
@welcome
Scenario: As a Shipper I want to be able to go to Sign Up page - B Flow
  When Shipper click Sign Up button
  Then Shipper is redirected to "[href='/home']"
  # Shipper redirected to home page (create job page)
