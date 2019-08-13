Feature: Shipper Experience - home (post-job) page

@tab @post_job
Scenario: As a Shipper I want to be able to go to home page (post job)
  Given Shipper is at login page
  When Shipper fill every form correctly
      And Shipper click Masuk
      And Shipper click Tab "[href='/home']"
  Then Shipper is redirected to ".home-page"

@post_job
Scenario: As a Shipper I want to be able to got to location picker (from)
  Given Shipper is at home page
  When Shipper click "#post_job_form-from_field"
  Then Shipper is redirected to "[placeholder='Cari kota']"

@post_job
Scenario: As a Shipper I want to be able to got to location picker (to)
  Given Shipper is at home page
  When Shipper click "#post_job_form-to_field"
  Then Shipper is redirected to "[placeholder='Cari kota']"

@post_job
Scenario: As a Shipper I want to be able to get date picker popup
  Given Shipper is at home page
  When Shipper click "#common_selector-button"
  Then Shipper is redirected to ".react-calendar__navigation"

@post_job
Scenario: As a Shipper I want to be able to go to vehicle picker
  Given Shipper is at home page
  When Shipper click "#vehicle_selector-button"
  Then Shipper is redirected to "#vehicle_type-button"  

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
  # Filled notification page
  Then Shipper is redirected to "#notification_component-button"
  # Empty notification page
  # Then Shipper is redirected to "[alt='Notification']"

@tab @quit
Scenario: As a Shipper I want to be able to go to profile page
  Given Shipper is at home page
  When Shipper click Tab "[href='/profile']"
  Then Shipper is redirected to "#profile_common_button"


# Scenario: As a Shipper I want to be able to log out
#   When Shipper click "profilePage.elements.logOut"
#   Then Shipper is logged out

# Scenario: As a Shipper I want to be able to go to daftar page
#   When Shipper click Daftar button
#   Then Shipper is on daftar page
  