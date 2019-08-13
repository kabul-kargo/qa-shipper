Feature: Shipper Experience - login page
Background: Load Login page
  Given Shipper is at login page
  
#Login negative test - nomor telfon
@login
Scenario Outline: As a Shipper I cannot login with incorrect phone number
  When Shipper fill phone number field with "<nomor telepon>"
    And Shipper fill password field with "Kargo123"
    And Shipper click Masuk 
  Then Shipper is given <warning message>

  Examples:
    | nomor telepon      |  warning message                    |
    |                    |  "Masukkan nomor telepon"           |
    | abcdefghij         |  "Masukkan nomor telepon"           |
    | 1234577899         |  "Format nomor telepon tidak valid" |
    | 82345678           |  "Format nomor telepon tidak valid" |
    | 823456789999       |  "Format nomor telepon tidak valid" |
    | 811440910          |  "Email atau nomor telepon Anda tidak terdaftar pada akun Kargo." |

  #Login negative test - password
  @login
  Scenario: As a Shipper I cannot login with incorrect password
  When Shipper fill phone number field with "82137014747"
    And Shipper fill password field with "asdasdasda"
    And Shipper click Masuk
  Then Shipper is given "Masukkan password yang benar"

#   Scenario: As a Shipper I cannot login with empty password
#   When Shipper fill phone number field with "81218611736"
#     And Shipper fill password field with "asdasdasda"
#     And Shipper fill password field with " "
#     And Shipper click Masuk
#   Then Shipper is given "Masukkan password"

  @login
  Scenario: As a Shipper I can go to forget password page
    When Shipper click forget password
    Then Shipper is on Forget Password page

  #Login positive test
  @login 
  Scenario: As a Shipper I can login with the correct info
    When Shipper fill every form correctly
      And Shipper click Masuk
    Then Shipper is redirected to ".home-page"
