Feature: kargo - login page
# Page load
Background: Load Login page
  Given user is at login page

#Login positive test
Scenario: As a User I can login with the correct info
  When user fill every form correctly
    And user click Masuk
  Then user is on Muat tab

# #Login negative test - nomor telfon
# Scenario Outline: As a User I cannot login with incorrect phone number
#   When user fill "nomor telepon" incorrectly
#     And user fill "password" correctly
#     And user click "Masuk"
#   Then user is given "error" warning

#   Examples:
#     | nomor telepon      |  error                              |
#     |                    |  "Masukkan nomor telepon"           | #empty field
#     | 1234577899         |  "Masukkan nomor telepon"           | #not start w/8
#     | abcdefghij         |  "Masukkan nomor telepon"           | #non numeric
#     | 82345678           |  "Format nomor telepon tidak valid" | # input < 9
#     | 823456789999       |  "Format nomor telepon tidak valid" | # input > 12
#     | 811440910          |  "Email atau nomor telepon Anda tidak terdaftar pada akun Kargo." | # unregistered number

#   #Login negative test - password
#   Scenario Outline: As a User I cannot login with incorrect password
#   When user fill "nomor telepon" correctly
#     And user fill "password" incorrectly
#     And user click "Masuk"
#   Then user is given "error" warning

#    Examples:
#     | password           |  error                              |
#     |                    |  "Masukkan password"                | #empty field
#     | asdasdasda         |  "Masukkan password yang benar"     | #wrong password

#     TODO
#     # See password
#     # lupa password
