# Pair Programming Session - Welcome and Login Page Automation 
### (Happy path)


## The documentation
---
Each pages of the website is split into it's respecting feature containing several user scenarios or scenario outline.
Every scenario is written after the Given-When-Then template, following the formula of:

- (Given) some context
- (When) some action is carried out
- (Then) the result of the previous action


Every page assertion also being done at the end of an action rather than before an action. Unless when the action interact with an element, in which case said element is asserted before any action into it can be done.

*Welcome Page*

    Feature: kargo - welcome page
    # Page load
    Background: Load welcome page
      Given user is at welcome page
    
    
    Scenario: As a User I want to be able to go to login page
      When user click Masuk button
      Then user is on login page
      
*Login Page*

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
    

___
UI automation test for the [Kargo](https://pr.kargo.tech/shipper/welcome/) page is done on the happy path flow assuming phone number and password is entered correctly.
User stories is described in [Cucumber](https://cucumber.io/) using [Gherkin](https://cucumber.io/docs/gherkin/reference/) syntax approach and mapped to browser operations/assertions in [Nightwatch.js](https://nightwatchjs.org/) running paralel instance of [Selenium](https://www.seleniumhq.org/) for each feature.


`features` folder contain the feature and scenarios that are going to be tested,
`step_definition` folder encompass steps taken in a scenario and elaborate it further,
and `page-object` accomodate things like page elements and the actual functions.
This setup ensure that the `features` highly human readable and more technical thing contained within `page-object`. While ensuring reusability with `step_definition`, single responsibility principle is still being kept in the actual function itself.

To run the automation test you need to:
 1. install latest NVM and Node
 2. clone this repo
 3. install dependencies
```sh
$ npm install
```
 4. go to docker_config and run docker
 ```sh
$ docker-compose start
```
 5. run task runner
 ```sh
$ npm install grunt -g
$ grunt
```
 6. run Nightwatch Web UI test on main directory
 ```sh
$ npm run test-docker-chrome
```

while the test is running, selenoid UI should be accessible at http://127.0.0.1:8080/ as the default url and port
 
After running the script at least once, report should  be available using  `npm run report-chrome`
 
 ---
###### _feel free to further contact me regarding the test environment, running the automation sript, or any other part of this repo at dasa@riyatmaja.gmail.com_
---

