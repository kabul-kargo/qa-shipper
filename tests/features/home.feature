Feature: Shipper Experience - home (post-job) page

@tab
Scenario: As a Shipper I want to be able to go to home page (post job)
  Given Shipper is at login page
  When Shipper fill every form correctly
      And Shipper click Masuk
      And Shipper click Tab "[href='/home']"
  Then Shipper is redirected to ".home-page"

Scenario: As a Shipper I want to be able to got to location picker (from)
  Given Shipper is at home page
  When Shipper click "#post_job_form-from_field"
  Then Shipper is redirected to "[placeholder='Cari kota']"


@tab @quit 
Scenario: As a Shipper I want to be able to go to jobs page
  Given Shipper is at home page
  When Shipper click Tab "[href='/jobs']"
  Then Shipper is redirected to "#tab_selector-tabs"

@tab @quit
Scenario: As a Shipper I want to be able to go to shipments page
  Given Shipper is at home page
  When Shipper click Tab "[href='/shipments']"
  Then Shipper is redirected to "#tab_selector-tabs"

@tab @quit
Scenario: As a Shipper I want to be able to go to notifications page
  Given Shipper is at home page
  When Shipper click Tab "[href='/notifications']"
  Then Shipper is redirected to "[alt='Notification']"

@tab @quit
Scenario: As a Shipper I want to be able to go to profile page
  Given Shipper is at home page
  When Shipper click Tab "[href='/profile']"
  Then Shipper is redirected to "#profile_common_button"

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
  