Feature: Let's Talk Tea Page
# Page load
Background: Load Let's Talk Tea Page
  Given user is at Let's Talk Tea page

#Send email positive test
Scenario: As a User I want to be able to send email to the company
  When user fill every form correctly
    And user click Submit button
  Then user can send email succesfully

#Send email negative test test
@teatalk
Scenario Outline: As a User I shouldn't be able to send email to the company with missing form submission
  When user fill every form correctly
    And user delete mandatory "<Form Field>"
    And user click Submit button
  Then user should get a warning that "<Form Field>" should not be empty
  Examples:
    | Form Field      |
    | name            |
    | email           |
    | subject         |
    | message         |

#Send email negative test test
@teatalk
Scenario Outline: As a User I shouldn't be able to send email to the company with invalid email
  When user fill every form correctly
    And user fill Email form with "<Invalid Email>"
    And user click Submit button
  Then user should get a warning that email adress is invalid
  Examples:
    | Invalid Email      |
    | loremipsum         | # Missing @ sign and domain
    | @ipsum.com         | # Missing username
    | lorem.ipsum.com    | # Missing @
    | lorem@ipsum@com    | # Two @ sign
    | lorem@ipsum        | # Missing top level domain (.com/.net/.org/etc)
    | .lorem@ipsum.com   | # Leading dot
    | lorem.@ipsum.com   | # Trailing dot
    | lor..em@ipsum.com  | # Multiple dots
    | lor em@ipsum.com   | # Space
    | あいうえお@ipsum@com| # Unicode char
    | lorem@-ipsum.com   | # Leading dash