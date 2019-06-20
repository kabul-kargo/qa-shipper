# Technical Assessment - Quality Engineer 
### Kabul Dasa Riyatmaja


The assessment 

  - Create documentation for test cases on http://automationpractice.com (backup if not available http://www.practiceselenium.com)
  - Find at least 1 bugs on the application, and create appropriate bug report.
  - Create at least 1 test automation script (UI test / performance test / api tests) based on the test cases or bug report
  
\
***for all of the assignment i will be focused on http://www.practiceselenium.com desktop site***

## The documentation
---
Each pages of the website is split into it's respecting feature containing several user scenarios or scenario outline.
Every scenario is written after the Given-When-Then template, following the formula of:

- (Given) some context
- (When) some action is carried out
- (Then) the result of the previous action

Please do note that some scenario that can be done from multiple pages or features (ex: `As a User I want to be able to click sidebar link on sidebar menu`) is only tested once on the main index page to avoid redundancy.
Every page assertion also being done at the end of an action rather than before an action. Unless when the action interact with an element, in which case said element is asserted before any action into it can be done.

    Feature : Index Page
        #http://www.practiceselenium.com/
        #http://www.practiceselenium.com/welcome.html
        #Page load
        Background: Load Index Page
          Given user is at Index Page
          
    #Sidebar Link
        Scenario Outline: As a User I want to be able to click sidebar link on sidebar menu
          When user click "<Sidebar Link>"
          Then user will see <Sidebar Link> page loaded succesfully
            # assert page element loaded correctly (sidebar, logo, editor box, copyright)
            # assert active sidebar link is the current page
            # assert url
          Examples:
            | Sidebar Link      |
            | Welcome           | #assert img, title, paragraph, link, see collection button
            | Our Passion       | #assert img, title and paragraph
            | Menu              | #assert img, name, description and checkout button
            | Let's Talk Tea    | #assert map and email form
            | Check Out         | #assert costumer info and payment form
            
        #EDITOR SIDEBAR
        Scenario Outline: As a User I want to be able to click More link on editor sidebar
          When user click "<Editor Link>"
          Then user will see Menu page loaded succesfully
          #same behaviour as above
          Examples:
            | Editor Link                   |
            | See our line of organic teas. |
            | Tea of the month club         |
        
        #PARAGRAPH LINK
        Scenario: As a User I want to be able to click link on the paragraph
          When user click link on the paragraph
          Then user will be redirected to http://www.seleniumframework.com/ succesfully
----
    Feature : Menu Page
        #http://www.practiceselenium.com/our-passion.html
        #Page load
        Background: Load Menu Page
          Given user is at Menu Page
            
        #Check Out button
        Scenario Outline: As a User I want to be able to click Check Out button on menu page
          When user click "<Check Out Button>"
          Then user will see Check Out page loaded succesfully
          Examples:
            | Check Out Button      | id                                              |
            | Green Tea             | wsb-button-00000000-0000-0000-0000-000451955160 |
            | Red Tea               | wsb-button-00000000-0000-0000-0000-000451959280 |
            | Oolong Tea            | wsb-button-00000000-0000-0000-0000-000451961556 |
---
    # http://www.practiceselenium.com/our-passion.html
    # this page have no unique scenario
--- 
    Feature : Let's Talk Tea Page
        #http://www.practiceselenium.com/let-s-talk-tea.html
        #Page load
        Background: Load Let's Talk Tea Page
          Given user is at Let's Talk Tea page
        
        #Send email positive test
        Scenario : As a User I want to be able to send email to the company
          When user fill every form correctly   # check mandatory field and valid input
            And user click Submit button
          Then user can send email succesfully  # check confirmation page, check mailtrap

        #Send email negative test test
        Scenario Outline: As a User I shouldn't be able to send email to the company with missing form submission
          When user fill every form correctly
            And user delete mandatory "<Form Field>"
            And user click Submit button
          Then user should get a warning that "<Form Field>" should not be empty
          # assert required field error
          Examples:
            | Form Field      |
            | name            |
            | email           |
            | subject         |
            | message         |

        #Send email negative test test
        Scenario Outline: As a User I shouldn't be able to send email to the company with invalid email
          When user fill every form correctly
            And user fill Email form  with "<Invalid Email>"
            And user click Submit button
          Then user should get a warning that email adress is invalid
          # assert invalid email error
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
 ---
    Feature : Check Out Page
        #http://www.practiceselenium.com/check-out.html
        #Page load
        Background: Load Check Out Page
          Given user is at Check Out page
        
        #Place order positive test
        Scenario : As a User I want to be able to place an order
          When user fill Customer info form correctly # assert form, autofill
            And user fill Payment form correctly # assert dropdown, form input validity
            And user click Place Order button 
          Then user can place order succesfully # assert succes page

        Scenario : As a User I want to be able to cancel unsubmitted order
          When user fill Customer info form correctly
            And user fill Payment form correctly
            And user click Cancel button
          Then user will see Menu page loaded succesfully

        #Place order negative test test
        Scenario Outline: As a User I shouldn't be able to place an order with invalid info
          When user fill Customer info form incorrectly # empty form, invalid email
            And user fill Payment form incorrectly # empty form, invalid card number/verification code format
            And user click Place Order button
          Then user should get a warning that form value is invalid

## The bugs
---
There are several bugs in http://www.practiceselenium.com, mainly regarding form handling and validation. The bugs present in [Let's Talk Tea](http://www.practiceselenium.com/let-s-talk-tea.html) and [Check Out](http://www.practiceselenium.com/check-out.html) page.

For this part of assignment, bug report will be made for the
*Let's Talk Tea page*

```sh
Scenario: As a User I want to be able to send email to the company
  Given user is at Lets Talk Tea page
  When user fill every form correctly
    And user click Submit button
  Then user can send email succesfully
```
`Expected outcome:` 
 - confirmation popup box showup
 - page redirecting to homepage or page is refreshed with empty form
 - mail is received on mailtrap
 
`Observed outcome:`
 - no response
 
`Possible problem:`
 - submit button call `return false` on click, prevent browser default behaviour 
 
```sh
Scenario Outline: As a User I should not be able to send email to the company with missing form submission
  Given user is at Lets Talk Tea page
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
```
`Expected outcome:` 
 - error message "<Form Field>" is required pop up
 
`Observed outcome:`
 - no response
 
`Possible problem:`
 - no error handling in required field, need to check if a mandatory field is empty before POST

```sh
Scenario Outline: As a User I should not be able to send email to the company with invalid email
  Given user is at Lets Talk Tea page
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
```
`Expected outcome:` 
 - error message email format is invalid
 
`Observed outcome:`
 - no response
 
`Possible problem:`
 - no error handling in required field, need to check if email format is correct


## The script
___
UI test on the bugs in [Let's Talk Tea](http://www.practiceselenium.com/let-s-talk-tea.html) page is done using BDD-style.
User stories is described in [Cucumber](https://cucumber.io/) using [Gherkin](https://cucumber.io/docs/gherkin/reference/) syntax approach and mapped to browser operations/assertions in [Nightwatch.js](https://nightwatchjs.org/)

To run the automation test you need to:
 1. install latest NVM and Node
 2. clone this repo
 3. install dependencies
 `npm install`
 4. run test
`npm run test-docker-chrome`
 or
`npm run test-docker-firefox`
or
`npm run test-chrome`
or
`npm run test-firefox`

 The script should yield 16 failed scenarios (since the website is faulty) split into 16 failed steps (failed to meet the 'then' assertion) and 63 passed steps (from given & when steps) .
 
After running the script at least once, snapshot of the test should be available under `screenshots/lets_talk_tea` on your machine.
 
 ---
###### _feel free to further contact me regarding the test environment, running the automation sript, or any other part of this repo at dasa@riyatmaja.gmail.com_
---

