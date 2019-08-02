Feature: Shipper Experience - login page
# Page load
Background: Load Login page
  Given user is at login page

#Login negative test - nomor telfon
Scenario Outline: As a User I cannot login with incorrect phone number
  When user fill phone number field with "<nomor telepon>"
    And user fill password field with "Kargo123"
    And user click Masuk 
  Then user is given <warning message>

  Examples:
    | nomor telepon      |  warning message                    |
    |                    |  "Masukkan nomor telepon"           |
    | abcdefghij         |  "Masukkan nomor telepon"           |
    | 1234577899         |  "Format nomor telepon tidak valid" |
    | 82345678           |  "Format nomor telepon tidak valid" |
    | 823456789999       |  "Format nomor telepon tidak valid" |
    | 811440910          |  "Email atau nomor telepon Anda tidak terdaftar pada akun Kargo." |

  #Login negative test - password
  Scenario: As a User I cannot login with incorrect password
  When user fill phone number field with "81218611736"
    And user fill password field with "asdasdasda"
    And user click Masuk
  Then user is given "Masukkan password yang benar"

  Scenario: As a User I cannot login with empty password
  When user fill phone number field with "81218611736"
    And user fill password field with "asdasdasda"
    And user fill password field with ""
    And user click Masuk
  Then user is given "Masukkan password"

  #Forget password
  Scenario: As a User I can go to forget password page
    When user click forget password
    Then user is on Forget Password page

  #Login positive test
  Scenario: As a User I can login with the correct info
    When user fill every form correctly
      And user click Masuk
    Then user is on Muat tab

  
#     TODO
#     # See password
#     # lupa password
